import axios from "axios"

var options = {
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "5155f36c0emsh6a5e9651dbc0adcp198d86jsndabffe1b1acc",
  },
}

const api = axios.create(options)

export const GetGlobalStat = () => api.get("/stats").then((res) => res.data)
