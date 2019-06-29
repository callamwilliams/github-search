import { all, takeLatest } from 'redux-saga/effects';

import { GET_USER, GET_REPOS } from '../constants/actionTypes';

import { fetchUser } from './user';
import { fetchRepos } from './repos';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_USER, fetchUser),
    takeLatest(GET_REPOS, fetchRepos)
  ]);
}
