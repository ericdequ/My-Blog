import { NextResponse } from 'next/server'
import generateRss from '@/lib/generate-rss'
import { getAllPosts } from '@/lib/posts' // Assuming you have this utility

export async function GET(request) {
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
  
      return NextResponse.json({ images })
    } catch (error) {
      console.error('Error fetching images:', error)
      return NextResponse.json({ error: 'Error processing request' }, { status: 500 })
    }
  }