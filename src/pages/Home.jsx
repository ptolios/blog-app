import { useState, useEffect } from "react"
import { getPosts } from "../services/apiService"
import Post from "../components/Post"

function HomePage() {
  const [mainPost, setMainPost] = useState({})
  const [firstSecondaryPost, setFirstSecondaryPost] = useState({})
  const [secondSecondaryPost, setSecondSecondaryPost] = useState({})
  // const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(({ data }) => {
        setMainPost(data?.pop(Math.floor(Math.random() * data.length)))
        setFirstSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setSecondSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        // setRelatedPosts(data)
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
      <div className="flex flex-row flex-wrap gap-8 justify-between">
        {/* Card*/}
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        {/* End Card*/}
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
        <div className="card">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/400"
            alt="image"
          />
          <div className="mt-6">
            <h2 className="text-xl font-medium">Title</h2>
            <h3 className="mt-1 text-xl opacity-45 font-medium">Author</h3>
          </div>
        </div>
      </div>
      {/* End Cards*/} {/* End Related Articles*/}
    </main>
  )
}

export default HomePage
