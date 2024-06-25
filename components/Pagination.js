import { motion } from 'framer-motion'
import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between pt-6 pb-8"
    >
      {!prevPage ? (
        <div className="w-1/3">
          <button
            rel="previous"
            className="cursor-not-allowed rounded-full px-6 py-3 text-sm font-medium text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50"
            disabled={!prevPage}
          >
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              &#10094;
            </motion.span>
          </button>
        </div>
      ) : (
        <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
          <motion.button
            rel="previous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg"
          >
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              &#10094;
            </motion.span>
          </motion.button>
        </Link>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm text-gray-700 dark:text-gray-200"
      >
        Page {currentPage} of {totalPages}
      </motion.span>
      {!nextPage ? (
        <div className="w-1/3 text-right">
          <button
            rel="next"
            className="cursor-not-allowed rounded-full px-6 py-3 text-sm font-medium text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50"
            disabled={!nextPage}
          >
            <motion.span
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              &#10095;
            </motion.span>
          </button>
        </div>
      ) : (
        <Link href={`/blog/page/${currentPage + 1}`}>
          <motion.button
            rel="next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg"
          >
            <motion.span
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              &#10095;
            </motion.span>
          </motion.button>
        </Link>
      )}
    </motion.div>
  )
}
