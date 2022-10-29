import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from './category.actions';
import { ActionTypes } from './category.types';
import { Action, IResponse } from '../state.interface';

const { FETCH_CATEGORIES_START } = ActionTypes;

///////////////////////
// ACTION HANDLERS
///////////////////////

export function* fetchCategoriesAsync(): Generator<any, void, object> {
  try {
    const response: IResponse = yield axios.get(
      `https://api.thecatapi.com/v1/categories`
    );
    const categories = response.data;
    yield put(fetchCategoriesSuccess(categories) as Action);
  } catch (error: any) {
    yield put(fetchCategoriesFailure(error) as Action);
  }
}

///////////////////////
// ACTION LISTENERS
///////////////////////

export function* onFetchCategoriesStart() {
  yield takeLatest(FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

///////////////////////
// All User Sagas
///////////////////////

export function* categorySagas() {
  yield all([
    //
    call(onFetchCategoriesStart),
  ]);
}
