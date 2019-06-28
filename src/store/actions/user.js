import { GET_USER } from '../constants/actionTypes';

export function getUser(username) {
  return {
    type: GET_USER,
    payload: { username }
  };
}
