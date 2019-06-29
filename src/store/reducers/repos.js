import _ from 'lodash';
import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL
} from '../constants/actionTypes';

const initialState = {
  data: [],
  loading: false,
  nextPage: {},
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: true
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        data: [...action.payload.repos],
        nextPage: action.payload.nextPage,
        loading: false,
        error: ''
      };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
