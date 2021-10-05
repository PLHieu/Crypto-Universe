import { combineReducers } from "redux"
import cryptoReducer from "./cryptoSlice"
import newsReducer from "./newSlice"

const rootReducer = combineReducers({
  news: newsReducer,
  crypto: cryptoReducer,
})

export default rootReducer
