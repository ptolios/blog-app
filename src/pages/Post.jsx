import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPost } from "../services/apiService"

function PostPage() {
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getPost(id)
      .then(({ data }) => {
        setPost(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div className="flex mx-20">
      <div className="w-1/2">
        <h1 className="text-5xl text-primary">{post.title}</h1>
        <h2 className="text-2xl text-secondary">{post.subtitle}</h2>
        <div>{post.body}</div>
      </div>
      <div className="w-1/2">
        <img src={post.photo?.url} alt={post.photo?.title} />
      </div>
    </div>
  )
}

export default PostPage
