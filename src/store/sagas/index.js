import { all, takeLatest } from 'redux-saga/effects';

import { GET_USER } from '../constants/actionTypes';

import { fetchUser } from './user';

export default function* rootSaga() {
  yield all([takeLatest(GET_USER, fetchUser)]);
}
