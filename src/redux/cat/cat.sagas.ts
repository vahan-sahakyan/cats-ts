import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCatsSuccess,
  fetchCatsFailure,
  fetchMoreCatsSuccess,
  fetchMoreCatsFailure,
} from './cat.actions';
import { ActionTypes } from './cat.types';
import { Action, IResponse } from '../state.interface';
const { FETCH_CATS_START, FETCH_MORE_CATS_START } = ActionTypes;

///////////////////////
// ACTION HANDLERS
///////////////////////
// FETCH CATS async
export function* fetchCatsAsync({
  payload: { page, categoryId },
}: any): Generator<any, void, object> {
  try {
    const response: IResponse = yield axios.get(
      `https://api.thecatapi.com/v1/images/search`,
      {
        params: {
          limit: 10,
          page: page,
          category_ids: categoryId,
        },
      }
    );
    const cats = response.data;

    yield put(fetchCatsSuccess(cats) as Action);
  } catch (error: any) {
    yield put(fetchCatsFailure(error) as Action);
  }
}

// FETCH MORE CATS async
export function* fetchMoreCatsAsync({
  payload: { page, categoryId },
}: any): Generator<any, void, object> {
  try {
    const response: IResponse = yield axios.get(
      `https://api.thecatapi.com/v1/images/search`,
      {
        params: {
          limit: 10,
          page: page,
          category_ids: categoryId,
        },
      }
    );
    const cats = response.data;

    yield put(fetchMoreCatsSuccess(cats) as Action);
  } catch (error: any) {
    yield put(fetchMoreCatsFailure(error) as Action);
  }
}

///////////////////////
// ACTION LISTENERS
///////////////////////

export function* onFetchCatsStart() {
  yield takeLatest(FETCH_CATS_START, fetchCatsAsync);
}
export function* onFetchMoreCatsStart() {
  yield takeLatest(FETCH_MORE_CATS_START, fetchMoreCatsAsync);
}

///////////////////////
// All Cat Sagas
///////////////////////

export function* catSagas() {
  yield all([
    //
    call(onFetchCatsStart),
    call(onFetchMoreCatsStart),
  ]);
}
