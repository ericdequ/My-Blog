import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'

import { MDXLayoutRenderer } from '@/components/MDXComponents'

import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { motion } from 'framer-motion'


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
  try {
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

    // rss
    if (allPosts.length > 0) {
      const rss = generateRss(allPosts)
      fs.writeFileSync('./public/feed.xml', rss)
    }

    return { props: { post, authorDetails, prev, next } }
  } catch (error) {
    console.error(`Error in getStaticProps for slug ${params.slug.join('/')}:`, error)
    return { notFound: true }
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  if (!post) {
    return <div>Post not found</div>
  }

  const { mdxSource, toc, frontMatter } = post
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {frontMatter.draft !== true ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={"overflow-x-hidden overflow-y-hidden"}
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
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </motion.div>
      )}
    </>
  )
}