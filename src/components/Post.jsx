import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Post({ id, title, subtitle, body, photo, className }) {
  Post.propTypes = {
    id: PropTypes.number,
    body: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    photo: PropTypes.object,
    className: PropTypes.string,
  }

  const contents = body?.split("\n")

  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <h1 className="text-6xl text-primary mt-20 font-bold">{title}</h1>
        <h2 className="text-2xl text-secondary mt-6">{subtitle}</h2>
        <img
          className="rounded-lg mt-20 mx-auto w-fit bg-cover"
          src={photo?.url}
          alt={photo?.title}
        />
      </Link>
      <article className="container mx-auto mt-20">
        {contents?.map((content) => (
          <p key={content} className="post-body">
            {content}
          </p>
        ))}
      </article>
    </div>
  )
}

export default Post
