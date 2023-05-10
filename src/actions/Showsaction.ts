import { ActionCreator } from ".";
import { Show } from "../models/show";

export const SHOWS_LOADED = "SHOWS_LOADED";
export const showLoadedAction: ActionCreator<Show[]> = (shows: Show[]) => ({
    type: SHOWS_LOADED,
    payload: shows,
});

export const SHOWS_QUERY_CHANGED = "SHOWS_QUERY_CHANGED";
export const showQueryChangeAction: ActionCreator<string> = (query: string) => ({
    type: SHOWS_QUERY_CHANGED,
    payload: query,
});

export const SHOWS_DETAIL_LOADED = "SHOW_DETAIL_LOADED";
export const showLoadedAction2: ActionCreator<Show> = (show: Show) => ({
    type: SHOWS_DETAIL_LOADED,
    payload: show,
});

export const LOADED_SHOW_ACTION = "LOADED_SHOW_ACTION";
export const loadedShowAction: ActionCreator<number> = (showId: number) => ({
    type: LOADED_SHOW_ACTION,
    payload: showId,
});