import fs from 'fs'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // Generate RSS feed
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  const truncatedExcerpt = frontMatter.summary || frontMatter.excerpt || ''
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${formatSlug(post.slug)}`

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={truncatedExcerpt}
        canonical={pageUrl}
        openGraph={{
          type: 'article',
          url: pageUrl,
          title: `${frontMatter.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
          description: truncatedExcerpt,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}${frontMatter.image}`,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      {frontMatter.draft !== true ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            toc={toc}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
          />
        </motion.div>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
