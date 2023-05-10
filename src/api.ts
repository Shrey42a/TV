import axios from "axios";
import { Show } from "./models/show";
import { Cast } from "./models/casts"

const BASE_URL = "https://api.tvmaze.com/"

// export const searchShows2 = async (keyword: string) => {
//   return axios.get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword).then((response) => response.data.map((item) => item.show))
// }

export const searchShows = async (keyword: string) => {
    const response = await axios.get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)

    const shows = response.data.map((item) => item.show)
    const Data = []
    for (let i = 0; i < shows.length; i++) {
        Data.push(getCastShow(shows[i]));
    }
    return Promise.all(Data);
}

const getCastShow = async (show: Show) => {
    const response = await axios.get<{ person: Cast }[]>(BASE_URL + "shows/" + show.id + "/cast")

    const cast = response.data.map((item) => item.person)
    return { show: show, cast: { id: show.id, cast: cast } }
}
// export const loadShowDetail = async(showId: number) => {
// return axios.get("https://api.tvmaze.com/shows/" + showId)
//   .then((response) => response.data)
// }

export const loadShowDetail = async (showId: number) => {
    const response = await axios.get("https://api.tvmaze.com/shows/" + showId)

    return response.data
}
export const ShowCast = (showId: number) => {
    return axios.get("https://api.tvmaze.com/shows/" + showId + "/cast").then((response) => response.data.map((item: any) => item.person))
}

// export const ShowCast = async (showId: number) => {
//   const response = await axios.get<{ person: Cast }[]>("https://api.tvmaze.com/shows/" + showId + "/cast")
//   return response.data.map((item: any) => item.person)
// }