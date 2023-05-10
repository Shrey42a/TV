import { AnyAction } from "redux";
import { CASTS_LOADED } from "../actions/CastAction";
import { Cast } from "../models/casts";
import produce from "immer";
import { schema, normalize } from "normalizr";

export type State = {
    cast: { [showId: number]: Cast };
};

export const initialState: State = {
    cast: {},
};

function CastReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case CASTS_LOADED:
            return produce(state, (draft) => {
                const casts = action.payload as Cast[];

                const castSchema = new schema.Entity("shows");

                const normalizedData = normalize(casts, [castSchema]);
                draft.cast = normalizedData.entities.shows || {};
            });
        // case SHOWS_LOADED:
        //   return produce(state, (draft) => {
        //     const cast1 = action.payload as Cast[]
        //     if (!cast1 || cast1.length === 0) {
        //       return;
        //     }
        //     const castArray = cast1.map((item: any) => item.Cast)
        //     const castEntity = new schema.Entity("cast");
        //     const normalizeData = normalize(castArray, [castEntity])
        //     draft.cast = normalizeData.entities.cast!

        //   })
        default:
            return state;
    }
}

export default CastReducer;
