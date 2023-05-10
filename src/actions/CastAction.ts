import { ActionCreator } from ".";
import { Cast } from "../models/casts";

export const CASTS_LOADED = "CASTS_LOADED";

export const CastsLoadedAction: ActionCreator<Cast[]> = (casts: Cast[]) => ({
    type: CASTS_LOADED,
    payload: casts,
});

export const LOADED_CAST = "LOADED_CAST"
export const loadedCastAction: ActionCreator<number> = (showId: number) => ({
    type: LOADED_CAST,
    payload: showId
});
