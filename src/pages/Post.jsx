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
    <div className="mt-36">
    {/* Post */}
    <div className="flex mx-20 gap-36">
      <div className="w-1/2">
        <h1 className="text-5xl text-primary-1 mb-6">{post.title}</h1>
        <h2 className="text-2xl text-primary-2 mb-6">{post.subtitle}</h2>
        <div>{post.body}</div>
      </div>
      <div className="w-1/2">
        <img className="rounded-xl" src={post.photo?.url} alt={post.photo?.title} />
      </div>
    </div>
    </div>
  )
}

export default PostPage
