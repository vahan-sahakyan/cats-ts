import { all, call } from 'redux-saga/effects';
import { catSagas } from './cat/cat.sagas';
import { categorySagas } from './category/category.sagas';

export default function* rootSaga() {
  yield all([
    //
    call(catSagas),
    call(categorySagas),
  ]);
}
