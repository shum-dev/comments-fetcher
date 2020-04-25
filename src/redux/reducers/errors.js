import { SET_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = {}, { type, error }) => {
  switch (type) {
    case SET_ERROR:
      return { error };
    case REMOVE_ERROR:
      return { };
    default:
      return state;
  }
};
