import { put, call } from 'redux-saga/effects';
import { GET_USER_SUCCESS, GET_USER_FAIL } from '../constants/actionTypes';

/**
 * Would typically use redux-saga-requests with axios here
 */

function fetchUserData(username) {
  return fetch(`/api/users/${username}`).then(response => response.json());
}

export function* fetchUser(action) {
  const { username } = action.payload;
  try {
    const response = yield call(fetchUserData, username);
    if (response) {
      yield put({ type: GET_USER_SUCCESS, payload: response });
    }
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}
