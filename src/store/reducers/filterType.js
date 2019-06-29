import { SET_FILTER_TYPE } from '../constants/actionTypes';

const initialState = {
  activeFilterType: 'full_name'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return {
        ...state,
        activeFilterType: action.payload
      };
    default:
      return state;
  }
}
