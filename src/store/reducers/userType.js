import { SET_USER_TYPE } from '../constants/actionTypes';

const initialState = {
  activeUserType: 'username'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_TYPE:
      return {
        ...state,
        activeUserType: action.payload
      };
    default:
      return state;
  }
}
