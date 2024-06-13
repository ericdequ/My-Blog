import { motion } from 'framer-motion'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, RedditShareButton } from 'react-share'
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit } from 'react-icons/fa'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags } = frontMatter

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Generate the URL for sharing the blog post
  const shareUrl = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <motion.div
          className="xl:divide-y xl:divide-primary-300 xl:dark:divide-primary-700 overflow-x-hidden overflow-y-hidden"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-secondary-500 dark:text-secondary-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-primary-300 pb-8 dark:divide-primary-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-primary-200 xl:pt-11 xl:dark:border-primary-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38"
                          height="38"
                          alt={`Avatar of ${author.name}`}
                          className="h-10 w-10 rounded-full animate-magical-pulse"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-primary-900 dark:text-primary-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-primary-300 dark:divide-primary-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <motion.div
                className="pt-6 pb-6 text-sm text-primary-700 dark:text-primary-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Social share buttons */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Share this post</h3>
                  <div className="flex space-x-4">
                    <FacebookShareButton 
                      url={shareUrl}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877f2] text-white hover:bg-[#166fe5] transition-colors duration-300"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1da1f2] text-white hover:bg-[#0c8bd9] transition-colors duration-300"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </TwitterShareButton>
                    <LinkedinShareButton
                      url={shareUrl}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a66c2] text-white hover:bg-[#0a5eb9] transition-colors duration-300"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </LinkedinShareButton>
                    <RedditShareButton
                      url={shareUrl}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4500] text-white hover:bg-[#e03f00] transition-colors duration-300"
                    >
                      <FaReddit className="w-5 h-5" />
                    </RedditShareButton>
                  </div>
                </div>
                {/* Links to discuss on Twitter and view on GitHub */}
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </motion.div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <motion.div
                className="divide-primary-300 text-sm font-medium leading-5 dark:divide-primary-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </motion.div>
      </article>
    </SectionContainer>
  )
}