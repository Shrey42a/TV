import axios from "axios";
import { Show } from "./models/show";

export const searchShows = (keyword: string) => {
    return axios.get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword).then((response) => response.data.map((item) => item.show))
}

export const loadShowDetail = (showId: number) => {
    return axios.get("https://api.tvmaze.com/shows/" + showId).then((response) => response.data)
}

export const ShowCast = (showId: number) => {
    return axios.get("https://api.tvmaze.com/shows/" + showId + "/cast").then((response) => response.data.map((item: any) => item.person))
}