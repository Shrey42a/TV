import { call, put } from "redux-saga/effects";
import { loadShowDetail, searchShows } from "../api";
import { Action } from "../actions";
import { showLoadedAction, showLoadedAction2 } from "../actions/Showsaction";

export function* fetchShows(action: Action): Generator<any, any, any> {
    const shows = yield call(searchShows, action.payload);
    yield put(showLoadedAction(shows));
}

export function* fetchShowDetail(action: Action): Generator<any, any, any> {
    const show = yield call(loadShowDetail, action.payload);
    yield put(showLoadedAction2(show));
}