import { motion } from 'framer-motion'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title } = frontMatter

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <motion.div
              className="space-y-1 border-b border-primary-200 pb-10 text-center dark:border-primary-700 overflow-x-hidden overflow-y-hidden"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-secondary-500 dark:text-secondary-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </motion.div>
          </header>
          <div
            className="divide-y divide-primary-200 pb-8 dark:divide-primary-700 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <motion.div
              className="divide-y divide-primary-200 dark:divide-primary-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </motion.div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <motion.div
                className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 animate-magical-fade"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 animate-magical-fade"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </motion.div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
