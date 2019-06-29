import { SET_ACTIVE_PAGE } from '../constants/actionTypes';

export function setActivePage(activePage = 0) {
  return {
    type: SET_ACTIVE_PAGE,
    payload: { activePage }
  };
}
