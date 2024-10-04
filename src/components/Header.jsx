function Header() {
  return (
    <>
      <header className="container mx-auto h-40 py-4 flex flex-row bg-white justify-between items-stretch">
        <div className="content-center text-xl">My Awesome Blog</div>
        {/* Nav Bar */}
        <nav className="content-center">
          <ul className="flex flex-row space-x-10 items-center">
            <li>
              <a className="hover:text-secondary" href="#">
                Random Post
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                About
              </a>
            </li>
            <li>
              <button className="bg-primary text-white text-xs rounded-lg p-3">
                Button
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
