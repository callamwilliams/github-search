import { put, call } from 'redux-saga/effects';
import changeCase from 'change-case';
import { GET_REPOS_SUCCESS, GET_REPOS_FAIL } from '../constants/actionTypes';

function getUrlType(username, userType) {
  let url;
  if (userType === 'username') {
    url = `/api/users/${username}/repos?per_page=10`;
  } else {
    url = `/api/orgs/${username}/repos?per_page=10`;
  }
  return url;
}

function getPageCount(activePage) {
  return activePage ? `&page=${activePage}` : '';
}

function getFilterType(filterType) {
  const filter = changeCase.snakeCase(filterType);
  return filterType ? `&sort=${filter}` : '';
}

/**
 * Would typically use redux-saga-requests with axios here
 */

function fetchReposData(url) {
  return fetch(url).then(response => response.json());
}

export function* fetchRepos(action) {
  const { username, activePage, userType, filterType } = action.payload;

  const url = [
    ...getUrlType(username, userType),
    ...getPageCount(activePage),
    ...getFilterType(filterType)
  ].join('');

  try {
    const response = yield call(fetchReposData, `${url}`);

    if (response) {
      const customPayload = { repos: response };
      yield put({ type: GET_REPOS_SUCCESS, payload: customPayload });
    }
  } catch (err) {
    yield put({ type: GET_REPOS_FAIL, payload: err });
  }
}
