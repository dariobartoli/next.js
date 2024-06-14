import { PostCard } from '@/components/PostCard'
//traer con un alias @/...
import React from 'react'
import './post.css'

//usestate
//useEffect
//render

async function loadPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return data
}

async function PostsPage() {
  const posts = await loadPosts()
  return (
    <div className='grid'> 
      {
        posts.map(post => (
          <PostCard post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default PostsPage