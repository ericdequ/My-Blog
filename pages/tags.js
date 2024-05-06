import { motion } from 'framer-motion'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')
  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <PageSEO
        title={`Discover by Tags - ${siteMetadata.author}`}
        description="Explore articles by their tags"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
      >
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"
          >
            Discover by Tags
          </motion.h1>
        </div>
        <motion.div variants={containerVariants} className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => (
            <motion.div
              key={t}
              variants={tagVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 mb-2 mr-5"
            >
              <Tag text={t} />
              <Link
                href={`/tags/${kebabCase(t)}`}
                className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {` (${tags[t]})`}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
