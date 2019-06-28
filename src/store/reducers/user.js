import _ from 'lodash';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../constants/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        loading: false,
        error: ''
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
