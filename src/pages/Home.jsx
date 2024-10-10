import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../services/apiService"
import Post from "../components/Post"
import RelatedPost from "../components/RelatedPost"

function HomePage() {
  const [mainPost, setMainPost] = useState({})
  const [firstSecondaryPost, setFirstSecondaryPost] = useState({})
  const [secondSecondaryPost, setSecondSecondaryPost] = useState({})
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(({ data }) => {
        setMainPost(data?.pop(Math.floor(Math.random() * data.length)))
        setFirstSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setSecondSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setRelatedPosts(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="container mx-auto">
      {/* Primary Post */}
      <Post {...mainPost} />
      {/* Secondary Posts */}
      <div className="flex gap-8">
        <Post className="w-1/2" {...firstSecondaryPost} />
        <Post className="w-1/2" {...secondSecondaryPost} />
      </div>
      {/* Related Articles*/}
      <div>
        <h2 className="text-4xl font-semibold">Related articles or posts</h2>
      </div>
      {/* Cards*/}
      <div className="flex flex-row flex-wrap mx-auto w-full">
        {relatedPosts.map((post) => (
          <Link
            className="mt-8 mb-24 lg:w-1/4 md:w-1/3 w-1/2 grow mx-8"
            to={`/post/${post.id}`}
            key={post.id}
          >
            <RelatedPost key={post.id} post={post} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default HomePage
