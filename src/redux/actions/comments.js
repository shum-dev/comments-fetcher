import apiCall from '../../services/api';
import { setError } from './errors';
import { INIT_COMMENTS, SET_COMMENTS_FILTER } from '../actionTypes';

export const initComments = (comments) => ({
  type: INIT_COMMENTS,
  payload: comments,
});

export const setCommentsFilter = (filter) => ({
  type: SET_COMMENTS_FILTER,
  payload: filter,
});

export const fetchComments = () => (dispatch) => (
  apiCall('get', '/comments')
    .then((res) => {
      dispatch(initComments(res));
      return res;
    })
    .catch((err) => {
      dispatch(setError(err.message));
      throw err;
    })
);
