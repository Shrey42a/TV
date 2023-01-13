import { produce } from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import { } from "../actions";
import { SHOWS_DETAIL_LOADED, SHOWS_LOADED, SHOWS_QUERY_CHANGED } from "../actions/Showsaction";
import { Show } from "../models/show";

export type State = {
    shows: { [showId: number]: Show };
    query_shows: { [query: string]: number[] };
    query: string;
    show_loading: { [showID: number]: boolean }
    loading: boolean;
};

export const initialState: State = {
    shows: {},
    query_shows: {},
    query: "",
    show_loading: {},
    loading: false,
};

function ShowReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case SHOWS_LOADED:
            return produce(state, (draft) => {
                const shows = action.payload as Show[];

                if (!shows || shows.length === 0) {
                    return;
                }

                const showSchema = new schema.Entity("shows");
                const normalizedData = normalize(shows, [showSchema]);
                draft.loading = false;
                draft.query_shows[draft.query] = normalizedData.result;
                draft.shows = { ...draft.shows, ...normalizedData.entities.shows };
            });
        case SHOWS_QUERY_CHANGED:
            return produce(state, (draft) => {
                draft.query = action.payload;
                draft.loading = true;
            })
        case SHOWS_DETAIL_LOADED:
            return produce(state, (draft) => {
                const show = action.payload as Show;
                draft.shows[show.id] = show;
            })
        default:
            return state;
    }
}

export default ShowReducer;