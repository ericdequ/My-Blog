import { useState } from 'react'
import Image from './Image'
import { avatarInitials, canShowAvatar } from '../lib/avatar.mjs'

export default function Avatar({ src, name, width = 40, height = 40, className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const authorName = name || 'Author'

  if (!canShowAvatar(src, failedSrc)) {
    return (
      <span
        role="img"
        aria-label={`${authorName} avatar unavailable`}
        className={`inline-flex shrink-0 items-center justify-center bg-gray-200 font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-100 ${className}`}
        style={{ width: Number(width), height: Number(height) }}
      >
        <span aria-hidden="true">{avatarInitials(name)}</span>
      </span>
    )
  }

  return (
    <Image
      src={src}
      alt={`${authorName} portrait`}
      width={width}
      height={height}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  )
}
