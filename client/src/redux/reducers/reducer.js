import * as types from '../actionTypes';

const initialState = {
  quote: null,
  notes: [
    { date: '01-01-2024', content: 'hello world' },
    { date: '01-09-2024', content: 'hi world' },
  ],
  seletedNote: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_QUOTE:
      return { ...state, quote: action.payload };
    case types.ADD_NOTE:
      return {
        ...state,
        //action.payload contains the newly added note and we add it to the notes array
        notes: [...state.notes, action.payload],
      };
    case types.VIEW_ALL_NOTES:
      return {
        ...state,
        notes: action.payload,
      };

    case types.SET_SELETED_NOTE:
      return {
        ...state,
        seletedNote: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
