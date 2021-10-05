import { GetNews } from "../../services/newApi"
import { GET_NEWS } from "./types"

export const getNews = (keyword) => async (dispatch) => {
  const data = await GetNews(keyword)
  dispatch({ type: GET_NEWS, payload: data.value })
}
