import React from "react"
import { DetailCurrency } from "../components"
import { useParams } from "react-router-dom"

const Detail = () => {
  const { coinId } = useParams()

  return <DetailCurrency id={coinId}></DetailCurrency>
}

export default Detail
