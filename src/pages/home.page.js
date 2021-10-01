import React from "react"
import { GlobalStat, News, TopCrypto } from "../components"

const Home = () => {
  return (
    <>
      <GlobalStat></GlobalStat>
      <TopCrypto numTop={10}></TopCrypto>
      <News keyword="crypto"></News>
    </>
  )
}

export default Home
