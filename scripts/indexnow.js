/* eslint-disable prettier/prettier */

const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const API_KEY = '2252e998ff1146cfb763c5b1f9b9a7da'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const BASE_URL = 'https://www.rics-notebook.com'
const DOMAIN = 'www.rics-notebook.com' // Host without protocol
const MAX_URLS_PER_BATCH = 10000 // IndexNow limit

// Validate URL format
const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === 'https:' || urlObj.protocol === 'http:'
  } catch {
    return false
  }
}

// Normalize URL (remove trailing slashes, etc.)
const normalizeUrl = (url) => {
  return url.replace(/\/$/, '') // Remove trailing slash
}

// Submit URLs in batches if needed
const submitBatch = async (urls) => {
  try {
    const payload = {
      host: DOMAIN, // Domain only, no protocol
      key: API_KEY,
      keyLocation: `${BASE_URL}/${API_KEY}.txt`, // Full URL to key file
      urlList: urls,
    }

    console.log(`\n📤 Submitting ${urls.length} URLs to IndexNow...`)
    console.log(`Host: ${payload.host}`)
    console.log(`Key Location: ${payload.keyLocation}`)
    console.log(`Sample URLs:`, urls.slice(0, 3))

    const response = await axios.post(INDEXNOW_ENDPOINT, payload, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      timeout: 30000, // 30 second timeout
    })

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ Batch submitted successfully (Status: ${response.status})`)
      return true
    } else {
      console.error(`❌ Unexpected status code: ${response.status}`)
      return false
    }
  } catch (error) {
    if (error.response) {
      console.error(`❌ API Error (${error.response.status}):`, error.response.data)
      console.error('Response Headers:', error.response.headers)
    } else if (error.request) {
      console.error('❌ No response received:', error.message)
    } else {
      console.error('❌ Request setup error:', error.message)
    }
    return false
  }
}

  ; (async () => {
    console.log('🔍 Scanning for pages...')

    // Validate API key
    if (!API_KEY || API_KEY.length < 8) {
      console.error('❌ Invalid or missing API_KEY in .env file')
      process.exit(1)
    }

    // Verify key file exists
    const keyFilePath = `public/${API_KEY}.txt`
    if (!fs.existsSync(keyFilePath)) {
      console.warn(`⚠️  Warning: Key file not found at ${keyFilePath}`)
      console.warn(`   Create it with: echo "${API_KEY}" > ${keyFilePath}`)
    }

    const pages = await globby([
      'pages/**/*.js',
      'pages/**/*.tsx',
      'data/blog/**/*.mdx',
      'data/blog/**/*.md',
      'public/tags/**/*.xml',
      '!pages/_*.js',
      '!pages/_*.tsx',
      '!pages/api/**',
      '!pages/404.*',
      '!pages/500.*',
    ])

    console.log(`📄 Found ${pages.length} files`)

    const urls = pages
      .map((page) => {
        // Exclude drafts and canonical URLs
        if (page.search('.md') >= 1 && fs.existsSync(page)) {
          const source = fs.readFileSync(page, 'utf8')
          const fm = matter(source)

          if (fm.data.draft) {
            console.log(`⏭️  Skipping draft: ${page}`)
            return null
          }

          if (fm.data.canonicalUrl) {
            console.log(`⏭️  Skipping canonical: ${page}`)
            return null
          }
        }

        if (page.startsWith('public/tags/') && page.endsWith('.xml')) {
          let tag = page.replace('public/tags/', '').replace('.xml', '')
          // Check if it's not feed.xml or something similar if necessary, but typically tags are filenames
          return normalizeUrl(`${BASE_URL}/tags/${tag}`)
        }

        // Convert file path to URL path
        let path = page
          .replace('pages/', '/')
          .replace('data/blog', '/blog')
          .replace('public/', '/')
          .replace('.js', '')
          .replace('.tsx', '')
          .replace('.mdx', '')
          .replace('.md', '')
          .replace('/index', '')

        // Skip dynamic routes and special pages
        if (
          path.includes('[') ||
          path.includes(']') ||
          path.includes('/api/') ||
          path === '/404' ||
          path === '/500'
        ) {
          return null
        }

        const url = normalizeUrl(`${BASE_URL}${path}`)

        // Validate URL
        if (!isValidUrl(url)) {
          console.warn(`⚠️  Invalid URL: ${url}`)
          return null
        }

        return url
      })
      .filter(Boolean)

    // Remove duplicates
    const uniqueUrls = [...new Set(urls)]

    console.log(`\n📊 Statistics:`)
    console.log(`   Total files scanned: ${pages.length}`)
    console.log(`   Valid URLs generated: ${urls.length}`)
    console.log(`   Unique URLs: ${uniqueUrls.length}`)
    console.log(`   Duplicates removed: ${urls.length - uniqueUrls.length}`)

    if (uniqueUrls.length === 0) {
      console.error('❌ No valid URLs to submit')
      process.exit(1)
    }

    // Submit in batches if needed
    const batches = []
    for (let i = 0; i < uniqueUrls.length; i += MAX_URLS_PER_BATCH) {
      batches.push(uniqueUrls.slice(i, i + MAX_URLS_PER_BATCH))
    }

    console.log(`\n🚀 Submitting ${batches.length} batch(es)...`)

    let successCount = 0
    for (let i = 0; i < batches.length; i++) {
      console.log(`\nBatch ${i + 1}/${batches.length}:`)
      const success = await submitBatch(batches[i])
      if (success) successCount++

      // Small delay between batches
      if (i < batches.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    console.log(`\n✨ Submission complete!`)
    console.log(`   Successful batches: ${successCount}/${batches.length}`)

    if (successCount < batches.length) {
      process.exit(1)
    }
  })()