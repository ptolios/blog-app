import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPost } from "../services/apiService"

function PostPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getPost(id)
      .then(({ data }) => {
        setIsLoading
        setPost(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  const contents = post.body?.split("\n")

  return (
    <div className="mt-36">
      {isLoading && (
        <div className="h-screen">
          <div className="bg-slate-500 text-6xl text-primary-1"></div>
          Loading post details...
        </div>
      )}
      {/* Post contents */}
      {!isLoading && (
        <div className="flex mx-20 gap-36">
          <div className="w-1/2">
            <h1 className="text-5xl text-primary-1 mb-6">{post.title}</h1>

            <h2 className="text-2xl text-primary-2 mb-6">{post.subtitle}</h2>

            {contents?.map((content) => (
              <p key={content} className="mb-6">
                {content}
              </p>
            ))}
          </div>
          {/* Post image */}
          <div className="w-1/2">
            <img className="rounded-xl" src={post.photo?.url} alt={post.photo?.title} />
          </div>
        </div>
      )}
    </div>
  )
}

export default PostPage
