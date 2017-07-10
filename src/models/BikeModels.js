import { call, put } from 'redux-saga/effects';
import update from 'immutability-helper';

const BikeModels = {
  identifier: 'bike',
  state: {
    number: 0,
  },
  effects: {
    publicSagas: {
      addNumber(privateSagas) {
        return function* addNumberEffect() {
          yield call(privateSagas.addOne);
        };
      },
    },
    privateSagas: {
      * addOne() {
        yield put({ type: 'oneMore', identifier: 'bike' });
      },
    },
  },
  reducers: {
    oneMore(state) {
      let { number } = state;
      number += 1;
      const newState = update(state, { number: { $set: number } });
      return newState;
    },
  },
};

export default BikeModels;
