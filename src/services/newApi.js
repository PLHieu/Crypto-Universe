var axios = require("axios").default

var options = {
  baseURL: "https://bing-news-search1.p.rapidapi.com/news",
  params: { freshness: "Day", textFormat: "Raw", safeSearch: "Off" },
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "5155f36c0emsh6a5e9651dbc0adcp198d86jsndabffe1b1acc",
  },
}

const api = axios.create(options)

export const GetNews = (keyword) =>
  api
    .get("/search", {
      params: {
        q: keyword,
      },
    })
    .then((res) => res.data)
