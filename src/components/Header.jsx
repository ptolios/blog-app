import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"

function Header() {
  return (
    <header className="mx-auto px-16 h-24 py-4 bg-primary-1 flex flex-row justify-between items-stretch">
      <div className="content-center text-xl text-white">My Awesome Blog</div>

      <nav className="content-center">
        <ul className="flex flex-row items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-primary-2 p-1 mr-4 rounded-md ${
                  isActive ? classes.active : undefined
                }`
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
                `hover:text-primary-2 p-1 mr-12 rounded-md ${
                  isActive ? classes.active : undefined
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <button className="bg-primary-1 text-white text-xs rounded-lg p-3">
              Random Post
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
