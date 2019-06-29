import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_REPOS_SUCCESS, GET_REPOS_FAIL } from '../constants/actionTypes';

/**
 * Would typically use redux-saga-requests with axios here
 */

// TODO: swap to fetch
function fetchReposData(username) {
  return axios.get(`/api/users/${username}/repos`);
}

export function* fetchRepos(action) {
  let { username } = action.payload;
  try {
    let response = yield call(fetchReposData, username);
    if (response.data) {
      yield put({ type: GET_REPOS_SUCCESS, payload: response.data });
    }
  } catch (err) {
    yield put({ type: GET_REPOS_FAIL, payload: err });
  }
}
