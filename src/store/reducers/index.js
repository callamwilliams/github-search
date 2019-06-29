import { combineReducers } from 'redux';
import user from './user';
import repos from './repos';
import pagination from './pagination';
import userType from './userType';

const rootReducer = combineReducers({
  pagination,
  user,
  repos,
  userType
});

export default rootReducer;
