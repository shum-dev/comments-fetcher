import {
  SET_COMMENTS_FILTER, INIT_COMMENTS,
} from '../actionTypes';

const defaultState = {
  cache: [],
  filteredList: [],
  filter: '.org',
};

export default (state = defaultState, { type, payload }) => {
  // eslint-disable-next-line arrow-body-style
  const filterApply = ({ list = state.cache, filter = state.filter }) => {
    return list.filter((item) => item.email.includes(filter));
  };

  switch (type) {
    case INIT_COMMENTS:
      return { ...state, cache: payload, filteredList: filterApply({ list: payload }) };
    case SET_COMMENTS_FILTER:
      return { ...state, filter: payload, filteredList: filterApply({ filter: payload }) };
    default:
      return state;
  }
};
