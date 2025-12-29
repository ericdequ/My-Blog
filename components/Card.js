/* eslint-disable prettier/prettier */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, category, tags = [] }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Gradient Accent Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-2xl">
        {/* Image Section */}
        {imgSrc && !imageError && (
          <div className="relative h-52 overflow-hidden bg-gray-200 dark:bg-gray-700">
            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <Image
                alt={title}
                src={imgSrc}
                width={600}
                height={400}
                className={`h-full w-full object-cover object-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Category Badge */}
            {category && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4 z-10"
              >
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm dark:bg-gray-900/90 dark:text-white">
                  {category}
                </span>
              </motion.div>
            )}

            {/* External Link Indicator */}
            {href && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-900/90"
              >
                <svg
                  className="h-4 w-4 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="relative flex h-full flex-col p-6">
          {/* Title */}
          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
            {href ? (
              <Link
                href={href}
                aria-label={`Link to ${title}`}
                className="after:absolute after:inset-0"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text transition-all duration-300 group-hover:from-primary-600 group-hover:to-purple-600 dark:from-white dark:to-white dark:group-hover:from-primary-400 dark:group-hover:to-purple-400">
                  {title}
                </span>
              </Link>
            ) : (
              title
            )}
          </h2>

          {/* Description */}
          <p className="mb-4 flex-grow text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* CTA Link */}
          {href && (
            <div className="relative z-10 flex items-center gap-2 text-base font-semibold text-primary-600 transition-colors duration-200 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300">
              <span>View Project</span>
              <motion.svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </div>
          )}
        </div>

        {/* Shine Effect on Hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  )
}

export default Card