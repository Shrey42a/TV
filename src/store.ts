import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { LOADED_SHOW_ACTION, SHOWS_QUERY_CHANGED } from "./actions/Showsaction";
import ShowReducer from "./reducers/Showreducer";
import { takeLatest, takeEvery, debounce } from "redux-saga/effects"
import { fetchShowDetail, fetchShows } from "./sagas/ShowsSaga";
import CastReducer from "./reducers/Castreducer";
import { fetchCast } from "./sagas/CastSaga";

const reducer = combineReducers({
    shows: ShowReducer,
    casts: CastReducer,
});

function* rootSaga() {
    yield debounce(500, SHOWS_QUERY_CHANGED, fetchShows);
    yield takeEvery(LOADED_SHOW_ACTION, fetchShowDetail);
    yield takeLatest(LOADED_SHOW_ACTION, fetchCast);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, (applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof reducer>;

export default store;