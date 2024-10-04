import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className="container mx-auto h-40 py-4 flex flex-row bg-white justify-between items-stretch">
        <div className="content-center text-xl">My Awesome Blog</div>
        {/* Nav Bar */}
        <nav className="content-center">
          <ul className="flex flex-row space-x-10 items-center">
            <li>
              <Link className="hover:text-secondary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" href="/about">
                About
              </Link>
            </li>
            <li>
              <button className="bg-primary text-white text-xs rounded-lg p-3">
                Random Post
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
