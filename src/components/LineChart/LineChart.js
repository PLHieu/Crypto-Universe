import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import React, { useState } from "react"
import { Line } from "react-chartjs-2"
import { useQuery } from "react-query"
import { GetCoinHistory } from "../../services/cryptoApi"

const LineChart = ({ coinId, color }) => {
  const [period, setPeriod] = useState("7d")
  const { data, isLoading, isError } = useQuery([coinId, period], () =>
    GetCoinHistory(coinId, period)
  )
  const coinPrices = []
  const coinTimestamp = []
  const time = ["24h", "7d", "30d", "1y", "5y"]

  if (isError) {
    return <div>Oops, There some errors</div>
  }

  if (isLoading) {
    return <CircularProgress />
  }

  for (let i = 0; i < data.data.history.length; i += 1) {
    coinPrices.push(data?.data?.history[i].price)
    coinTimestamp.push(
      new Date(data?.data?.history[i].timestamp).toLocaleDateString()
    )
  }

  const chartData = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrices,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <>
      <FormControl>
        <InputLabel id="select_period_label">Period</InputLabel>
        <Select
          labelId="select_period_label"
          id="select_period"
          value={period}
          label="Period"
          onChange={(e) => setPeriod(e.target.value)}
        >
          {time.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Line data={chartData} options={options}></Line>
    </>
  )
}

export default LineChart
