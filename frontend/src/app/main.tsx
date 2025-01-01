//imports
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"

//router
import router from "$app/router"

//store
import store from "$states/store"

const rootElement = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
