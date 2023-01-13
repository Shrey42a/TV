import { ActionCreator } from ".";
import { Cast } from "../models/casts";

export const CASTS_LOADED = "CASTS_LOADED";

export const CastsLoadedAction: ActionCreator<Cast[]> = (casts: Cast[]) => ({
    type: CASTS_LOADED,
    payload: casts,
});
