import { GET_REPOS } from '../constants/actionTypes';

export function getRepos(username, activePage = 0) {
  return {
    type: GET_REPOS,
    payload: { username, activePage }
  };
}
