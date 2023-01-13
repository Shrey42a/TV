import { createSelector } from "reselect";
import { State } from "../store";

export const CastStateSelector = (state: State) => state.casts;

export const CastMapSelector = createSelector(
    CastStateSelector,
    (showState) => showState.cast
);

export const CastSelector = createSelector(CastMapSelector, (CastMap) =>
    Object.keys(CastMap).map((castId) => CastMap[+castId])
);
