import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { CastsLoadedAction } from "../actions/CastAction";
import { ShowCast } from "../api";

export function* fetchCast(action: Action): Generator<any, any, any> {
    const cast = yield call(ShowCast, action.payload);
    yield put(CastsLoadedAction(cast));
    console.log("cast", cast);
}
