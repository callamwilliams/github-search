import { combineReducers } from 'redux';
import user from './user';
import repos from './repos';
import pagination from './pagination';
import userType from './userType';
import filterType from './filterType';

const rootReducer = combineReducers({
  pagination,
  user,
  repos,
  userType,
  filterType
});

export default rootReducer;
