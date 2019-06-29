import { SET_FILTER_TYPE } from '../constants/actionTypes';

export function setFilterType(filterType) {
  return {
    type: SET_FILTER_TYPE,
    payload: filterType
  };
}
