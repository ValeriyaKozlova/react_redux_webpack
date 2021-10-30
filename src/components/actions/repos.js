import axios from "axios"
import { setRepo } from "../../reducers/reposReducer"

export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    dispatch(setRepo(response.data))
  }
}