import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import useStyles from "./styles/global-stat.style"

const GlobalStat = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4">
            Global Crypto Stats
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Cryptocurrencies</Typography>
            <Typography variant="h4">123</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Exchanges</Typography>
            <Typography variant="h4">123</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total Market Cap</Typography>
            <Typography variant="h4">123</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.statItem}>
            <Typography variant="h5">Total 24h Volume</Typography>
            <Typography variant="h4">123</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default GlobalStat
