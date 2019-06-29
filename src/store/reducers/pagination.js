import { SET_ACTIVE_PAGE } from '../constants/actionTypes';

const initialState = {
  activePage: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      };
    default:
      return state;
  }
}
