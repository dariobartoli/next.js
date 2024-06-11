import { PostCard } from '@/components/PostCard'
import React from 'react'

//usestate
//useEffect
//render

async function loadPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
  return data
}

async function PostsPage() {
  const posts = await loadPosts()
  return (
    <div>
      {
        posts.map(post => (
          <PostCard post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default PostsPage