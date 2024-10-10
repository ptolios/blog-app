import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"

function Header() {
  return (
    <header className="w-fullpx-16 h-40 py-4 bg-primary-1">
      <div className="flex flex-row mx-20 h-full justify-between content-center">

       <div className="content-center text-xl text-white">My Awesome Blog</div>

        <nav className="content-center">
          <ul className="flex flex-row items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-primary-2 p-1 mr-4 rounded-md ${
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
                  `text-white hover:text-primary-2 p-1 mr-12 rounded-md ${
                    isActive ? classes.active : undefined
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <button className="bg-secondary-1 text-primary-1 text-xs rounded-lg p-3">
                Random Post
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
