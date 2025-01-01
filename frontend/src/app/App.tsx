//imports
import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

//shared-components
import { Header } from "$fragments"

//styles
import "$styles/index.sass"

function App() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export default App
