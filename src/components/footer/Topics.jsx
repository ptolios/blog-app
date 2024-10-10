import PropTypes from "prop-types"
import { Link } from "react-router-dom"
function Topic({ topic, className }) {
  Topic.propTypes = {
    topic: PropTypes.object,
    className: PropTypes.string,
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div>{topic?.name}</div>
      {topic?.pages.map((page) => (
        <Link to="#" key={page}>
          <div className="mt-6 opacity-60" key={page}>
            {page}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Topic
