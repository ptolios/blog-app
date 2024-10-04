import Post from "../components/Post"

function HomePage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-6xl mt-20 font-bold">Posts List</h1>
      <h2 className="text-2xl text-slate-500 font-normal w-1/2 mt-6">
        "Exploring the Unseen: Dive into the Depths of Adventure, Knowledge, and
        Inspiration" or "Crafting Creativity: Explore Inspiring Stories and Ideas in Our
        Blog"
      </h2>
      {/* Primary Post */}
      <Post />
      {/* Secondary Posts */}
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
