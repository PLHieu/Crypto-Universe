import {
  GetCoinExchange,
  GetCoinHistory,
  GetCurrencies,
  GetDetailCurrency,
  GetGlobalStat,
} from "../../services/cryptoApi"
import {
  GET_COIN_HISTORY,
  GET_CURRENCIES,
  GET_CURRENCY,
  GET_EXCHANGES,
  GET_GLOBAL_STATS,
} from "./types"

export const getCurrencies = () => async (dispatch) => {
  const data = await GetCurrencies()
  dispatch({ type: GET_CURRENCIES, payload: data.data.coins })
}

export const getDetailCurrency = (id) => async (dispatch) => {
  const data = await GetDetailCurrency(id)
  dispatch({ type: GET_CURRENCY, payload: data.data.coin })
}

export const getGlobalStats = () => async (dispatch) => {
  const data = await GetGlobalStat()
  dispatch({ type: GET_GLOBAL_STATS, payload: data.data })
}

export const getCoinHistory = (id, period) => async (dispatch) => {
  const data = await GetCoinHistory(id, period)
  dispatch({ type: GET_COIN_HISTORY, payload: data.data.history })
}

export const getCoinExchange = (id) => async (dispatch) => {
  const data = await GetCoinExchange()
  dispatch({ type: GET_EXCHANGES, payload: data.data.exchanges })
}
