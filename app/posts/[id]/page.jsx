import { Suspense } from "react"
import PostsPage from "../page"

async function loadPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
} 

const PostPage = async({params}) => {
  const post = await loadPost(params.id)
  return (
    <div>
        <h1>{post.id} - {post.title}</h1>
        <p>{post.body}</p>

        <hr/>
        <h3>Otras publicaciones</h3>
        {/* Poner dentro de suspense nos permite cargar la info de la pagina sin tener que esperar a que Postpage carge sus datos */}
        <Suspense fallback={<div>Cargando publicaciones</div>}>
            <PostsPage/>
        </Suspense>
    </div>
  )
}

export default PostPage