import { CircularProgress, Grid, Typography, Box } from "@mui/material"
import React from "react"
import useStyles from "./styles/global-stat.style"
import { useQuery } from "react-query"
import { GetGlobalStat } from "../../services/cryptoApi"
import millify from "millify"

const GlobalStat = () => {
  const classes = useStyles()
  const { data, isLoading } = useQuery("globalStat", GetGlobalStat, {
    refetchInterval: false,
  })
  const globalStats = data?.data

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              p: 3,
            }}
            variant="h4"
          >
            Global Crypto Stats
          </Typography>
        </Grid>

        {isLoading ? (
          <Grid item xs={12}>
            <Box
              sx={{
                p: 3,
              }}
            >
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          <>
            <Grid item xs={6}>
              <Box className={classes.statItem}>
                <Typography variant="h5">Total Cryptocurrencies</Typography>
                <Typography variant="h4">
                  {millify(globalStats.totalCoins)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.statItem}>
                <Typography variant="h5">Total Exchanges</Typography>
                <Typography variant="h4">
                  {millify(globalStats.totalExchanges)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.statItem}>
                <Typography variant="h5">Total Market Cap</Typography>
                <Typography variant="h4">
                  {millify(globalStats.totalMarketCap)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.statItem}>
                <Typography variant="h5">Total 24h Volume</Typography>
                <Typography variant="h4">
                  {millify(globalStats.total24hVolume)}
                </Typography>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  )
}

export default GlobalStat
