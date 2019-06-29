import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_REPOS_SUCCESS, GET_REPOS_FAIL } from '../constants/actionTypes';

function cleanURL(url) {
  let cleanLink = decodeURIComponent(url);
  cleanLink = cleanLink.split(',').find(s => s.indexOf('rel="next"') > -1);
  cleanLink = cleanLink.split(';')[0].slice(1, -1);
  return cleanLink;
}

function getNextPage(response) {
  const link = response.headers.link;
  if (!link) return null;

  const nextLink = cleanURL(link);

  if (!nextLink) return null;

  return nextLink;
}

/**
 * Would typically use redux-saga-requests with axios here
 */

//

// TODO: swap to fetch
function fetchReposData(url) {
  return axios.get(url);
}

export function* fetchRepos(action) {
  let { username, activePage } = action.payload;

  try {
    let response = yield call(
      fetchReposData,
      ///users/andrew/repos?per_page=10&page=5
      `/api/users/${username}/repos?per_page=10&page=${activePage}`
    );

    if (response.data) {
      let nextPage = yield getNextPage(response);
      const customPayload = { repos: response.data, nextPage: nextPage };
      yield put({ type: GET_REPOS_SUCCESS, payload: customPayload });
    }
  } catch (err) {
    yield put({ type: GET_REPOS_FAIL, payload: err });
  }
}
