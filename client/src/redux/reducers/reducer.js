import * as types from '../actionTypes';

const initialState = {
  quote: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
