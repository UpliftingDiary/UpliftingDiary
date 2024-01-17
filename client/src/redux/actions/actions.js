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

export const addNote = (note) => {
  return async (dispatch) => {
    try {
      //send request to backend to add new note to DB
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
      });

      //receive response from DB
      const data = await response.json();
      console.log('New note added:', data);

      //dispatch reducer to add new note to state
      dispatch({
        type: types.ADD_NOTE,
        payload: data,
      });
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };
};

export const viewAllNotes = () => {
  //send request to backend to get all notes from DB
  return async (dispatch) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'GET',
      });

      const data = await response.json();
      console.log('data from backend:', data);
      //dispatch reducer to add all notes from DB to state
      dispatch({
        type: types.VIEW_ALL_NOTES,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching all notes:', error);
    }
  };
};

export const setSelectNote = (note) => {
  return async (dispatch) => {
    dispatch({
      type: types.SET_SELETED_NOTE,
      payload: note,
    });
  };
};
