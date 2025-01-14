import { NextResponse } from 'next/server'
import generateRss from '@/lib/generate-rss'
import { getAllPosts } from '@/lib/posts' // Assuming you have this utility


export async function GET(request, { params }) {
  try {
    const { tag } = params
    if (!tag) {
      return new NextResponse('Tag parameter is required', { status: 400 })
    }

    const posts = await getAllPosts()
    const filteredPosts = posts.filter(post => 
      post.tags && post.tags.includes(tag)
    )

    if (filteredPosts.length === 0) {
      return new NextResponse('No posts found for this tag', { status: 404 })
    }

    const rss = generateRss(filteredPosts, `feed/tag/${tag}.xml`)
    
    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('Error generating tag-specific RSS feed:', error)
    return new NextResponse('Error generating feed', { status: 500 })
  }
}