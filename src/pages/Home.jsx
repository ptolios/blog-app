import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../services/apiService"
import Post from "../components/Post"
import RelatedPost from "../components/RelatedPost"

function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [mainPost, setMainPost] = useState({})
  const [firstSecondaryPost, setFirstSecondaryPost] = useState({})
  const [secondSecondaryPost, setSecondSecondaryPost] = useState({})
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(({ data }) => {
        setIsLoading(true)
        setMainPost(data?.pop(Math.floor(Math.random() * data.length)))
        setFirstSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setSecondSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setRelatedPosts(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <main className="container mx-auto">
      {isLoading && <div className="text-5xl text-primary-1 h-screen">Loading...</div>}
      {!isLoading && (
        <>
          {/* Primary Post */}
          <Post {...mainPost} isMain />

          {/* Secondary Posts */}
          <div className="flex md:flex-row flex-col gap-8">
            <Post className="md:w-1/2 w-full" {...firstSecondaryPost} />
            <Post className="md:w-1/2 w-full" {...secondSecondaryPost} />
          </div>

          {/* Related Articles*/}
          <div className="mt-32">
            <div>
              <h2 className="text-4xl font-semibold">Related articles or posts</h2>
            </div>
            <div className="flex flex-row flex-wrap mx-auto w-full gap-8 justify-between">
              {relatedPosts.map((post) => (
                <Link
                  className="mt-8 mb-24 lg:w-1/4 md:w-1/3 w-1/2 grow"
                  to={`/post/${post.id}`}
                  key={post.id}
                >
                  <RelatedPost key={post.id} post={post} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default HomePage
