import { GET_REPOS } from '../constants/actionTypes';

export function getRepos(username) {
  return {
    type: GET_REPOS,
    payload: { username }
  };
}
