import { CssBaseline } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router-dom"
import { SideMenu } from "./components"
import Cryptocurrencies from "./pages/crypto.page"
import Exchange from "./pages/exchange.page"
import Home from "./pages/home.page"
import New from "./pages/news.page"
import "./App.css"

const App = () => {
  return (
    <>
      <CssBaseline></CssBaseline>
      <div className="app">
        <div className="navbar">
          <SideMenu></SideMenu>
        </div>
        <div className="main"></div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/exchanges">
            <Exchange></Exchange>
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies></Cryptocurrencies>
          </Route>
          <Route exact path="/news">
            <New></New>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
