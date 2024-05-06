import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-9xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              404
            </span>
          </h1>
          <p className="text-3xl font-bold leading-normal text-gray-700 dark:text-gray-200 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Take me home
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-600 dark:text-gray-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </>
  )
}
