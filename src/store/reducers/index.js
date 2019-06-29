import { combineReducers } from 'redux';
import user from './user';
import repos from './repos';
import pagination from './pagination';

const rootReducer = combineReducers({
  pagination,
  user,
  repos
});

export default rootReducer;
