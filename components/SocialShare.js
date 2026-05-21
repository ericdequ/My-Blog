import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

// Icons (inline for simplicity or imported)
import Twitter from './social-icons/twitter.svg'
import Facebook from './social-icons/facebook.svg'
import Linkedin from './social-icons/linkedin.svg'

const SocialShare = ({ title, slug }) => {
    const [copied, setCopied] = useState(false)
    const url = `${siteMetadata.siteUrl}/blog/${slug}`

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    }

    return (
        <div className="flex items-center space-x-4 py-4">
            <span className="text-secondary-400 font-medium tracking-wide text-sm uppercase">Share:</span>
            <div className="flex space-x-3">
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 border border-primary-500/30 text-primary-400 hover:text-primary-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
                    aria-label="Share on Twitter"
                >
                    <Twitter className="w-5 h-5 fill-current" />
                </a>
                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 border border-primary-500/30 text-primary-400 hover:text-primary-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
                    aria-label="Share on Facebook"
                >
                    <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 border border-primary-500/30 text-primary-400 hover:text-primary-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin className="w-5 h-5 fill-current" />
                </a>
                <button
                    onClick={handleCopy}
                    className={`p-2 rounded-full bg-gray-800 border border-primary-500/30 transition-all duration-300 ${copied
                            ? 'text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                            : 'text-primary-400 hover:text-primary-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                        }`}
                    aria-label="Copy Link"
                >
                    {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default SocialShare
