import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import { motion } from 'framer-motion'

const Tag = ({ text }) => {
  if (!text) {
    return null
  }

  const tagVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const textVariants = {
    hover: {
      color: '#3B82F6',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const tagSlug = kebabCase(text)

  return (
    <motion.div
      className="inline-block rounded-full bg-primary-100 dark:bg-primary-800 px-4 py-2 mr-2 mb-2"
      variants={tagVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <Link href={`/tags/${tagSlug}`} passHref>
        <motion.a
          className="text-lg font-semibold text-primary-800 dark:text-primary-200"
          variants={textVariants}
          aria-label={`View posts tagged with ${text}`}
        >
          {text}
        </motion.a>
      </Link>
    </motion.div>
  )
}

export default Tag
