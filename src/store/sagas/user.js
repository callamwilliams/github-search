import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_FAIL } from '../constants/actionTypes';

/**
 * Would typically use redux-saga-requests with axios here
 */

// TODO: swap to fetch
function fetchUserData(username) {
  return axios.get(`/api/users/${username}`);
}

export function* fetchUser(action) {
  let { username } = action.payload;
  try {
    let response = yield call(fetchUserData, username);
    if (response.data) {
      yield put({ type: GET_USER_SUCCESS, payload: response.data });
    }
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}
