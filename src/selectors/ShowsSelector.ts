import { createSelector } from "reselect";
import { State } from "../store";

export const showsStateSelector = (state: State) => state.shows;

export const showsQuerySelector = createSelector(showsStateSelector, (showState) => showState.query);

export const showsMapSelector = createSelector(showsStateSelector, (showsState) => showsState.shows);

export const loadingSelector = createSelector(showsStateSelector, (showsState) => showsState.loading);

export const queryMapSelector = createSelector(showsStateSelector, (showsState) => showsState.query_shows);

export const showSingleMapSelector = createSelector(showsStateSelector, (showState) => showState.shows);

export const showsSelector = createSelector(showsMapSelector, showsQuerySelector, queryMapSelector, (showsMap, query, queryShowsMap) => queryShowsMap[query] ? queryShowsMap[query].map((showId) => showsMap[showId]) : []);