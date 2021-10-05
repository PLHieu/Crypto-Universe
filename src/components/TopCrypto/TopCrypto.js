import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
  Box,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import millify from "millify"
import { Link } from "react-router-dom"
import useStyles from "./styles/top-crypto.style"
import { useDispatch, connect } from "react-redux"
import { getCurrencies } from "../../store/actions/cryptoAction"

const TopCrypto = ({ numTop, coins }) => {
  const [cryptos, setCryptos] = useState([])
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])

  useEffect(() => {
    setCryptos(coins?.filter((item, i) => i < numTop))
  }, [coins, numTop])

  if (!cryptos || cryptos.length === 0) {
    return (
      <Grid item xs={12}>
        <Box
          sx={{
            p: 3,
          }}
        >
          <CircularProgress />
        </Box>
      </Grid>
    )
  }

  return (
    <Box
      sx={{
        padding: 1,
        marginTop: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
        }}
      >
        Top {numTop} Cryptos In The World
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: 1,
        }}
      >
        {cryptos?.map((item, i) => (
          <Grid key={i} item lg={3} md={6} xs={12}>
            <Card
              sx={{
                boxShadow: `0 8px 40px -12px ${item.color || "black"}`,
                border: `1px solid transparent`,
                "&:hover": {
                  boxShadow: `0 18px 50px -12px ${item.color || "black"}`,
                  border: `1px solid ${item.color}`,
                },
                borderRadius: 2,
              }}
            >
              <Link
                to={`cryptocurrencies/${item.id}`}
                className={classes.linkItem}
              >
                <CardHeader
                  avatar={<Avatar src={item.iconUrl} />}
                  title={`${item.id}. ${item.name}`}
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
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  coins: state.crypto.coins,
})

export default connect(mapStateToProps)(TopCrypto)
