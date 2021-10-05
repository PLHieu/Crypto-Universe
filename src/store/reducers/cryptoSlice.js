import {
  GET_COIN_HISTORY,
  GET_CURRENCIES,
  GET_CURRENCY,
  GET_EXCHANGES,
  GET_GLOBAL_STATS,
} from "../actions/types"

const initialState = {
  globalStat: null,
  coins: [],
  detailCoin: null,
  coinHistory: [],
  exchanges: [],
}

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        coins: action.payload,
      }

    case GET_CURRENCY:
      return {
        ...state,
        detailCoin: action.payload,
      }

    case GET_GLOBAL_STATS:
      return {
        ...state,
        globalStat: action.payload,
      }

    case GET_COIN_HISTORY:
      return {
        ...state,
        coinHistory: action.payload,
      }

    case GET_EXCHANGES:
      return {
        ...state,
        exchanges: action.payload,
      }

    default:
      return state
  }
}

export default cryptoReducer
