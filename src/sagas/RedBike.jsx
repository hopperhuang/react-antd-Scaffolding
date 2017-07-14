import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import 'babel-polyfill';

function* addNumber(aciton) {
  const number = aciton.payload;
  yield put({ type: 'numberAdd', payload: number });
}

function* RedBikeSaga() {
  yield takeEvery('addNumber', addNumber);
}

export default RedBikeSaga;
