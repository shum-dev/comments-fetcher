import {
  SET_COMMENTS_FILTERED, SET_COMMENTS_FILTER, INIT_COMMENTS,
} from '../actionTypes';

const defaultState = {
  cache: [],
  filteredList: [],
  filter: '.org',
};

export default (state = defaultState, { type, payload }) => {
  const filterApply = (list) => {
    const { filter } = state;
    return list.filter((item) => item.email.includes(filter));
  };

  switch (type) {
    case INIT_COMMENTS:
      return { ...state, cache: payload, filteredList: filterApply(payload) };
    case SET_COMMENTS_FILTERED:
      return { ...state, filteredList: payload };
    case SET_COMMENTS_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
