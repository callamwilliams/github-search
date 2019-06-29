import { SET_USER_TYPE } from '../constants/actionTypes';

export function setUserType(userType = 'username') {
  return {
    type: SET_USER_TYPE,
    payload: userType
  };
}
