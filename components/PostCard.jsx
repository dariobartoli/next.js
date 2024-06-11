'use client'

export const PostCard = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => {}}>Publicar</button>
  </div>
  )
}
