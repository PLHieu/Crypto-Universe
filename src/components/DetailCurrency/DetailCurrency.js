import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import React from "react"
import { GetDetailCurrency } from "../../services/cryptoApi"
import { useQuery } from "react-query"
import HTMLReactParser from "html-react-parser"

const DetailCurrency = ({ id }) => {
  const { data, isLoading, isError } = useQuery(["detail", id], () =>
    GetDetailCurrency(id)
  )
  const coin = data?.data?.coin

  if (isError) {
    return <div>Oops, There Something wrong </div>
  }

  if (isLoading) {
    return <CircularProgress />
  }

  console.log(coin)
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
      <Box>
        <Typography variant="h4">Bitcoin (bitcoin-btc) Price</Typography>
        <Typography variant="subtitle1">
          Bitcoin live price in US Dollar (USD). View value statistics, market
          cap and supply.
        </Typography>
      </Box>
      <Divider />
      <Box>
        <FormControl fullWidth>
          <InputLabel id="select_period_label">Period</InputLabel>
          <Select
            labelId="select_period_label"
            id="select_period"
            // value={}
            label="Period"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{`${coin.name} Price Chart`}</Typography>
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
          <Typography variant="h5">Other Stats Info</Typography>
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
          <Typography variant="h5">{`What is ${coin.name} ?`}</Typography>
          {HTMLReactParser(coin.description)}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">{`${coin.name} Link`}</Typography>
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

export default DetailCurrency
