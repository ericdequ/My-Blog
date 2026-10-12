const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const matter = require('gray-matter')
const config = require('../next.config')

const slugs = [
  'RicBrowser',
  'ric-os-user-owned-ai-relationship',
  'ric-os-browser-monetization',
  'ric-net-localized-internet',
]
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'))

for (const slug of slugs) {
  const source = fs.readFileSync(`data/blog/inventions/${slug}.md`, 'utf8')
  const { data } = matter(source)
  const route = `/blog/inventions/${slug}`
  assert.ok(manifest.routes[route], `${route} must be built`)
  assert.ok(!manifest.notFoundRoutes.includes(route), `${route} must not become a 404`)
  assert.ok(data.images?.length, `${slug} must retain a cover image`)
  const cover = new URL(data.images[0])
  assert.ok(
    config.images.remotePatterns.some(
      (pattern) =>
        pattern.protocol === cover.protocol.slice(0, -1) &&
        pattern.hostname === cover.hostname &&
        pattern.pathname === '/user-attachments/assets/**' &&
        cover.pathname.startsWith('/user-attachments/assets/')
    ),
    `${slug} cover must be allowed by the image optimizer`
  )
  for (const [, link] of source.matchAll(/\]\((\/blog\/[^)]+)\)/g)) {
    const pathname = link.split(/[?#]/)[0]
    const target = path.join('data', pathname)
    assert.ok(
      fs.existsSync(`${target}.md`) || fs.existsSync(`${target}.mdx`),
      `${slug} has a broken internal link: ${link}`
    )
  }
}

console.log('Ric series: four published routes, covers, and internal links verified')
