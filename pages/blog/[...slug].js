import PageTitle from '@/components/PageTitle'

import { MDXLayoutRenderer } from '@/components/MDXComponents'

import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

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

  return (
    <>
      {frontMatter.draft !== true ? (
        <div className="overflow-x-hidden overflow-y-hidden">
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            toc={toc}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
          />
        </div>
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
