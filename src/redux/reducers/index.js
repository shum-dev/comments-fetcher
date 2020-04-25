import { combineReducers } from 'redux';
import errors from './errors';
import comments from './comments';

const rootReducer = combineReducers({
  errors,
  comments,
});

export default rootReducer;
