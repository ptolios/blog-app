import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./layouts/Layout"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import PostPage from "./pages/Post"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
