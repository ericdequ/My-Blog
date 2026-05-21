import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-8 flex flex-col items-center space-y-2">
          <span className="text-xs font-bold tracking-wider text-secondary-500 uppercase">Quantum Network</span>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://www.quantumcybersolutions.com/" className="text-gray-500 hover:text-primary-500 transition-colors">QCS</a>
            <a href="https://www.robotric.org/" className="text-gray-500 hover:text-secondary-500 transition-colors">Robotric</a>
            <a href="https://www.bev.cool/" className="text-gray-500 hover:text-accent-500 transition-colors">Bev Cool</a>
            <a href="https://www.warriorsandwildthings.com/" className="text-gray-500 hover:text-emerald-500 transition-colors">Warriors</a>
            <a href="https://www.leopiolet.com/" className="text-gray-500 hover:text-primary-400 transition-colors">Leo Piolet</a>
          </div>
        </div>
        <div className="mb-3 flex space-x-4">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
