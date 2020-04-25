import apiCall from '../../services/api';
import { setError } from './errors';
import { SET_COMMENTS } from '../actionTypes';

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const fetchComments = () => (dispatch) => (
  apiCall('get', '/comments')
    .then((res) => {
      dispatch(setComments(res));
      return res;
    })
    .catch((err) => {
      dispatch(setError(err.message));
      throw err;
    })
);
