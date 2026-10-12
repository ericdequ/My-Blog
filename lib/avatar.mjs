export function avatarInitials(name) {
  const words = typeof name === 'string' ? name.match(/[\p{L}\p{N}]+/gu) || [] : []
  if (words.length === 0) return '?'
  const first = Array.from(words[0])[0]
  const last = words.length > 1 ? Array.from(words[words.length - 1])[0] : ''
  return `${first}${last}`.toLocaleUpperCase('en-US')
}

export function canShowAvatar(src, failedSrc) {
  return typeof src === 'string' && src.trim().length > 0 && src !== failedSrc
}
