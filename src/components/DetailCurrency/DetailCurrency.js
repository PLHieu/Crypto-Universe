import {
  Typography,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from "@mui/material"
import millify from "millify"
import { Box } from "@mui/system"
import React, { useEffect } from "react"
import HTMLReactParser from "html-react-parser"
import LineChart from "../LineChart/LineChart"
import { useDispatch, connect } from "react-redux"
import { getDetailCurrency } from "../../store/actions/cryptoAction"

const DetailCurrency = ({ id, coin }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailCurrency(id))
  }, [dispatch, id])

  // if (isError) {
  //   return <div>Oops, There Something wrong </div>
  // }

  if (!coin) {
    return <CircularProgress />
  }

  const stats = [
    {
      title: "Price to USD",
      value: `${coin.price && millify(coin.price)}`,
    },
    {
      title: "24h Volume",
      value: `${coin.volume && millify(coin.volume)}`,
    },
    {
      title: "Rank",
      value: `coin.rank`,
    },
    {
      title: "Market Cap",
      value: `${coin.marketCap && millify(coin.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `${coin.allTimeHigh.price && millify(coin.allTimeHigh.price)}`,
    },
  ]

  const genericStats = [
    {
      title: "Number Of Markets",
      value: `${coin.numberOfMarkets && millify(coin.numberOfMarkets)}`,
    },
    {
      title: "Number Of Exchanges",
      value: `${coin.numberOfExchanges && millify(coin.numberOfExchanges)}`,
    },
    {
      title: "Aprroved Supply",
      value: coin.approvedSupply ? "Yes" : "No",
    },
    {
      title: "Total Supply",
      value: `${coin.totalSupply && millify(coin.totalSupply)}`,
    },
    {
      title: "Circulating Supply",
      value: `${coin.circulatingSupply && millify(coin.circulatingSupply)}`,
    },
  ]

  return (
    <>
      <Box sx={{ margin: "16px 0 16px" }}>
        <Typography fontWeight="bold" variant="h4" color="#1976d2">
          {coin.name} - {coin.symbol}'s Price
        </Typography>
        <Typography variant="subtitle1">
          {coin.name} live price in US Dollar (USD). View value statistics,
          market cap and supply.
        </Typography>
      </Box>

      <LineChart coinId={id}></LineChart>

      <Grid
        container
        spacing={3}
        sx={{
          padding: "16px",
          marginTop: 1,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >{`${coin.name} Price Chart`}</Typography>
          <Typography variant="body2">
            An overview showing the statistics of Bitcoin, such as the base and
            quote currency, the rank, and trading volume.
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {stats.map((row, i) => (
                  <TableRow hover key={i}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Other Stats Info
          </Typography>
          <Typography variant="body2">
            An overview showing the statistics of Bitcoin, such as the base and
            quote currency, the rank, and trading volume.
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {genericStats.map((row, i) => (
                  <TableRow hover key={i}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >{`What is ${coin.name} ?`}</Typography>
          {HTMLReactParser(coin.description)}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >{`${coin.name} Link`}</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {coin.links.map((link, i) => (
                  <TableRow hover key={i}>
                    <TableCell>{link.type}</TableCell>
                    <TableCell align="right">{link.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  coin: state.crypto.detailCoin,
})

export default connect(mapStateToProps)(DetailCurrency)
