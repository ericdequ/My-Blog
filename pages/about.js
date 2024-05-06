import { motion } from 'framer-motion'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8 xl:sticky xl:top-24">
              <motion.img
                src={frontMatter.avatar}
                alt="avatar"
                className="h-48 w-48 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                {frontMatter.name}
              </h3>
              <div className="text-gray-500 dark:text-gray-400">{frontMatter.occupation}</div>
            </div>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              <MDXLayoutRenderer
                layout={frontMatter.layout || DEFAULT_LAYOUT}
                mdxSource={mdxSource}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
