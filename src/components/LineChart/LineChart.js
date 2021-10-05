import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import React, { useEffect } from "react"
import { Line } from "react-chartjs-2"
import { useDispatch, connect } from "react-redux"
import { getCoinHistory } from "../../store/actions/cryptoAction"

const LineChart = ({ coinId, history }) => {
  const period = "7d"
  const dispatch = useDispatch()
  const coinPrices = []
  const coinTimestamp = []
  const time = ["24h", "7d", "30d", "1y", "5y"]

  // if (isError) {
  //   return <div>Oops, There some errors</div>
  // }

  useEffect(() => {
    dispatch(getCoinHistory(coinId, period))
  }, [dispatch, coinId, period])

  if (!history || history.length === 0) {
    return <CircularProgress />
  }

  for (let i = 0; i < history.length; i += 1) {
    coinPrices.push(history[i].price)
    coinTimestamp.push(new Date(history[i].timestamp).toLocaleDateString())
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
          onChange={(e) => dispatch(getCoinHistory(coinId, e.target.value))}
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

const mapStateToProps = (state) => ({
  history: state.crypto.coinHistory,
})

export default connect(mapStateToProps)(LineChart)
