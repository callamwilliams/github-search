import { put, call } from 'redux-saga/effects';
import axios from 'axios';
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

// TODO: swap to fetch
function fetchReposData(url) {
  return axios.get(url);
}

export function* fetchRepos(action) {
  let { username, activePage, userType, filterType } = action.payload;

  const url = [
    ...getUrlType(username, userType),
    ...getPageCount(activePage),
    ...getFilterType(filterType)
  ].join('');

  try {
    let response = yield call(fetchReposData, `${url}`);

    if (response.data) {
      const customPayload = { repos: response.data };
      yield put({ type: GET_REPOS_SUCCESS, payload: customPayload });
    }
  } catch (err) {
    yield put({ type: GET_REPOS_FAIL, payload: err });
  }
}
