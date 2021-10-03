import { CssBaseline, Box } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router-dom"
import { SideMenu } from "./components"
import Cryptocurrencies from "./pages/crypto.page"
import Exchange from "./pages/exchange.page"
import Home from "./pages/home.page"
import New from "./pages/news.page"
import "./App.css"
import Detail from "./pages/detail.page"

const App = () => {
  const menuHeight = 80

  return (
    <>
      <CssBaseline></CssBaseline>
      <SideMenu height={menuHeight} />
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
          marginTop: `${menuHeight}px`,
          marginBottom: `40px`,
        }}
      >
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
          <Route exact path="/cryptocurrencies/:coinId">
            <Detail></Detail>
          </Route>
          <Route exact path="/news">
            <New></New>
          </Route>
        </Switch>
      </Box>
    </>
  )
}

export default App
