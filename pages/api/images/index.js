// pages/api/images/index.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const posts = await getAllPosts()
    const images = posts.reduce((acc, post) => {
      if (post.images) {
        acc.push(...post.images.map(image => ({
          url: image,
          post: {
            title: post.title,
            slug: post.slug,
            date: post.date
          }
        })))
      }
      return acc
    }, [])

    return res.status(200).json({ images })
  } catch (error) {
    console.error('Error fetching images:', error)
    return res.status(500).json({ error: 'Error processing request' })
  }
}
