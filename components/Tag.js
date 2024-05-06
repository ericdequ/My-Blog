import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import { motion } from 'framer-motion'

const Tag = ({ text }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
          {text.split(' ').join('-')}
        </a>
      </Link>
    </motion.div>
  )
}

export default Tag
