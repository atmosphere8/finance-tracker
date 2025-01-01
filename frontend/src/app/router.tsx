//imports
import React from "react"
import { createBrowserRouter } from "react-router-dom"

//pages
import App from "$app/App"
import { Main } from "$page"

export default createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      }
    ]
  }
])
