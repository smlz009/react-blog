import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import AppHeader from "components/app-header"
import AppFooter from "components/app-footer"
import routes from "./router"

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App
