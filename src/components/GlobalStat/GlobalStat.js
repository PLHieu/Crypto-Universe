import { CircularProgress, Grid, Typography, Box } from "@mui/material"
import React, { useEffect } from "react"
import useStyles from "./styles/global-stat.style"
import millify from "millify"
import { useDispatch, connect } from "react-redux"
import { getGlobalStats } from "../../store/actions/cryptoAction"

const GlobalStat = ({ globalStats }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGlobalStats())
  }, [dispatch])

  if (!Boolean(globalStats)) {
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

        <Grid item xs={12} md={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Cryptocurrencies</Typography>
            <Typography variant="h4">
              {millify(globalStats.totalCoins)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Exchanges</Typography>
            <Typography variant="h4">
              {millify(globalStats.totalExchanges)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Market Cap</Typography>
            <Typography variant="h4">
              {millify(globalStats.totalMarketCap)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total 24h Volume</Typography>
            <Typography variant="h4">
              {millify(globalStats.total24hVolume)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  globalStats: state.crypto.globalStat,
})

export default connect(mapStateToProps)(GlobalStat)
