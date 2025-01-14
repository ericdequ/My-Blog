import siteMetadata from '@/data/siteMetadata'

// Utility function to safely escape XML special characters
const escapeXml = (unsafe) => {
  if (typeof unsafe !== 'string') return ''
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case "'":
        return '&apos;'
      case '"':
        return '&quot;'
      default:
        return c
    }
  })
}

// Validate required post fields
const validatePost = (post) => {
  const required = ['slug', 'title', 'date']
  const missing = required.filter((field) => !post[field])
  if (missing.length > 0) {
    throw new Error(`Post is missing required fields: ${missing.join(', ')}`)
  }

  if (!(post.date instanceof Date) && !Date.parse(post.date)) {
    throw new Error(`Invalid date format for post: ${post.title}`)
  }
}

// Generate a single RSS item with error handling
const generateRssItem = (post) => {
  try {
    validatePost(post)

    const itemParts = [
      `<item>`,
      `<guid>${siteMetadata.siteUrl}/blog/${escapeXml(post.slug)}</guid>`,
      `<title>${escapeXml(post.title)}</title>`,
      `<link>${siteMetadata.siteUrl}/blog/${escapeXml(post.slug)}</link>`,
      post.summary ? `<description>${escapeXml(post.summary)}</description>` : '',
      `<pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
      `<author>${escapeXml(siteMetadata.email)} (${escapeXml(siteMetadata.author)})</author>`,
    ]

    // Safely handle optional tags
    if (Array.isArray(post.tags)) {
      const tags = post.tags
        .filter((tag) => tag && typeof tag === 'string')
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
      itemParts.push(tags.join(''))
    }

    // Safely handle optional images
    if (Array.isArray(post.images)) {
      const images = post.images
        .filter((image) => image && typeof image === 'string')
        .map((image) => `<image>${escapeXml(image)}</image>`)
      itemParts.push(images.join(''))
    }

    itemParts.push(`</item>`)
    return itemParts.join('\n    ')
  } catch (error) {
    console.error(`Error generating RSS item for post: ${post?.title || 'Unknown post'}`, error)
    return '' // Skip invalid items instead of breaking the entire feed
  }
}

// Validate site metadata
const validateSiteMetadata = () => {
  const required = ['title', 'description', 'siteUrl', 'language', 'email', 'author']
  const missing = required.filter((field) => !siteMetadata[field])
  if (missing.length > 0) {
    throw new Error(`Site metadata is missing required fields: ${missing.join(', ')}`)
  }
}

// Generate the complete RSS feed
const generateRss = (posts, page = 'feed.xml') => {
  try {
    validateSiteMetadata()

    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error('Posts must be a non-empty array')
    }

    // Sort posts by date to ensure correct lastBuildDate
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

    const channelParts = [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
      `  <channel>`,
      `    <title>${escapeXml(siteMetadata.title)}</title>`,
      `    <link>${escapeXml(siteMetadata.siteUrl)}/blog</link>`,
      `    <description>${escapeXml(siteMetadata.description)}</description>`,
      `    <language>${escapeXml(siteMetadata.language)}</language>`,
      `    <managingEditor>${escapeXml(siteMetadata.email)} (${escapeXml(
        siteMetadata.author
      )})</managingEditor>`,
      `    <webMaster>${escapeXml(siteMetadata.email)} (${escapeXml(
        siteMetadata.author
      )})</webMaster>`,
      `    <lastBuildDate>${new Date(sortedPosts[0].date).toUTCString()}</lastBuildDate>`,
      `    <atom:link href="${escapeXml(siteMetadata.siteUrl)}/${escapeXml(
        page
      )}" rel="self" type="application/rss+xml"/>`,
      sortedPosts.map(generateRssItem).filter(Boolean).join('\n    '),
      `  </channel>`,
      `</rss>`,
    ]

    return channelParts.join('\n')
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    throw error // Re-throw to let the caller handle the error
  }
}

export default generateRss
