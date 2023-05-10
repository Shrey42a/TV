import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import { Show } from "../models/show";

type State = {
    shows: { [showId: number]: Show };
    query_shows: { [query: string]: number[] };
    query: string;
    show_loading: { [showID: number]: boolean }
    loading: boolean;
};

const initialState: State = {
    shows: {},
    query_shows: {},
    query: "",
    show_loading: {},
    loading: false,
};

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        showsLoaded,
        showsQueryChange,
        showLoadedAction2,
    }
});

export function showsLoaded(state: State, action: PayloadAction<Show[]>) {
    const shows = action.payload as Show[];
    if (!shows || shows.length === 0) {
        return;
    }
    const showSchema = new schema.Entity("shows");
    const normalizedData = normalize(shows, [showSchema]);
    state.loading = false;
    state.query_shows[state.query] = normalizedData.result;
    state.shows = { ...state.shows, ...normalizedData.entities.shows };
}

export function showsQueryChange(state: State, action: PayloadAction<string>) {
    state.query = action.payload;
    state.loading = true;
}

export function showLoadedAction2(state: State, action: PayloadAction<Show>) {
    const show = action.payload as Show;
    state.shows[show.id] = show;
}
export function loadedShowAction(state: State, action: PayloadAction<number>) {
    const showId = action.payload;
    
}

const { actions, reducer: showsReducer } = showsSlice;
export const { showsLoaded: showsLoadedAction, showsQueryChange: showsQueryChangeAction, showLoadedAction2: showLoadedActionn2 } = actions;
export default showsReducer;