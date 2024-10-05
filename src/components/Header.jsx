import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="mx-auto px-16 h-40 py-4 bg-slate-300 flex flex-row justify-between items-stretch">
      <div className="content-center text-xl">My Awesome Blog</div>

      <nav className="content-center">
        <ul className="flex flex-row items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "hover:text-secondary p-1 mr-4 rounded-md " + (isActive ? "active" : "")
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "hover:text-secondary p-1 mr-12 rounded-md " + (isActive ? "active" : "")
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <button className="bg-primary text-white text-xs rounded-lg p-3">
              Random Post
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
