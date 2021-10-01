import React from "react"
import { GlobalStat, News, TopCrypto } from "../components"

const Home = () => {
  return (
    <>
      <GlobalStat></GlobalStat>
      <TopCrypto></TopCrypto>
      <News keyword="crypto"></News>
    </>
  )
}

export default Home
