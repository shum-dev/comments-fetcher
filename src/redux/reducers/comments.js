import { SET_COMMENTS } from '../actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_COMMENTS:
      return [...payload];
    default:
      return state;
  }
};
