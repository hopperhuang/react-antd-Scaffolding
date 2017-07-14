import { fork } from 'redux-saga/effects';
import RedBike from './RedBike';

export default function* root() {
  yield [
    fork(RedBike),
  ];
}
