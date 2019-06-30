/* eslint-disable no-undef */

import { put, takeLatest } from 'redux-saga/effects';
import { fetchUser } from '../../store/sagas/user';

const mockResponse = {
  login: 'callamwilliams',
  id: 1899003,
  avatar_url: 'https://avatars3.githubusercontent.com/u/1899003?v=4',
  html_url: 'https://github.com/callamwilliams',
  type: 'User',
  name: 'Callam',
  public_repos: 15
};

export function* getUserWatcher() {
  yield takeLatest('GET_USER', fetchUser);
}

describe('getUser SAGA', () => {
  it('should dispatch action "GET_USER" ', () => {
    const generator = getUserWatcher();
    expect(generator.next().value).toEqual(takeLatest('GET_USER', fetchUser));
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "GET_USER_SUCCESS" with result from API', () => {
    const mockPayload = {
      action: {
        payload: {
          username: 'callamwilliams'
        }
      }
    };

    const generator = fetchUser(mockPayload.action);
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({
        type: 'GET_USER_SUCCESS',
        payload: mockResponse
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
