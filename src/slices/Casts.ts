import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import { Avtar } from "../models/avatar";
import { Cast } from "../models/casts";

type normalizePerson = { [personId: number]: Avtar };

type State = {
    cast: { [showId: number]: Cast };
    avatar: boolean;
    person: normalizePerson;
};

const initialState: State = {
    cast: {},
    person: {},
    avatar: false,
};

const castsSlice = createSlice({
    name: "casts",
    initialState,
    reducers: {
        CastsLoadedAction,
    }
});

export function CastsLoadedAction(state: State, action: PayloadAction<Cast[]>){
    const casts = action.payload as Cast[];
                const castSchema = new schema.Entity("shows");
                const normalizedData = normalize(casts, [castSchema]);
                state.cast = normalizedData.entities.shows || {};
}

const { actions, reducer: CastReducer } = castsSlice;
export const { CastsLoadedAction: CastsLoadedActionn } = actions;
export default CastReducer;