import { SET_COMMENTS, SET_COMMENTS_FILTERED } from '../actionTypes';

const defaultState = {
  cache: [],
  filteredList: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_COMMENTS:
      return { ...state, cache: payload };
    case SET_COMMENTS_FILTERED:
      return { ...state, filteredList: payload };
    default:
      return state;
  }
};
