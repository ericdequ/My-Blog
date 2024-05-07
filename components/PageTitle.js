import { motion } from 'framer-motion'

export default function PageTitle({ children }) {
  const text = Array.from(children)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 lg:text-5xl lg:leading-none xl:text-6xl"
    >
      <div className="flex flex-wrap justify-center">
        {text.map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={child} className="mr-2">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  )
}
