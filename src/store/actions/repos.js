import { GET_REPOS } from '../constants/actionTypes';

export function getRepos(username, activePage = 0, userType = 'username') {
  return {
    type: GET_REPOS,
    payload: { username, activePage, userType }
  };
}
