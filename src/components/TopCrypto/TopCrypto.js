import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { GetCurrencies } from "../../services/cryptoApi"
import millify from "millify"
import { Link } from "react-router-dom"

const TopCrypto = ({ numTop }) => {
  const { data, isLoading } = useQuery("Currencies", GetCurrencies)
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    setCryptos(data?.data?.coins.filter((item, i) => i < numTop))
  }, [data])

  return (
    <>
      <Typography variant="h4">Top {numTop} Cryptos In The World</Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          cryptos?.map((item, i) => (
            <Grid key={i} item lg={3} md={4} xs={6}>
              <Link to={`cryptocurrencies/${item.id}`}>
                <Card sx={{ boxShadow: `0 8px 40px -12px ${item.color}` }}>
                  <CardHeader
                    avatar={<Avatar src={item.iconUrl} />}
                    title={`${i}. ${item.name}`}
                  ></CardHeader>
                  <CardContent>
                    <Typography variant="body2">
                      Price: {millify(item.price)}
                    </Typography>
                    <Typography variant="body2">
                      Market Cap: {millify(item.marketCap)}
                    </Typography>
                    <Typography variant="body2">
                      Daily Change: {item.change}%
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </>
  )
}

export default TopCrypto
