import axios from "axios"

const api = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:9000",
})

function getPosts() {
  const startParam = Math.floor(Math.random() * 88)
  const endParam = startParam + 12
  return api.get("posts", {
    params: {
      _start: startParam,
      _end: endParam,
    },
  })
}

function getPost(id) {
  return api.get(`posts/${id}`)
}

export { getPosts, getPost }
