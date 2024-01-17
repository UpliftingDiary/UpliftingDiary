import * as types from '../actionTypes';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/quote', {
        method: 'GET',
      });
      const data = await response.json();
      dispatch({ type: types.FETCH_QUOTE, payload: data });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
};
