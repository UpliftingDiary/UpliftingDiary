import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions/actions';

const NotesInput = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const dispatch = useDispatch();
  // @desc    Add a new problem
  // @route   POST api/problems
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted note to save to DB:', note);
    dispatch(addNote(note));
  };

  // get today's date in MM-DD-YYY format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={today}
          readOnly
        />

        <textarea
          className="notes-textarea"
          placeholder="Enter your notes here..."
          id="note"
          name="note"
          value={note}
          onChange={handleNoteChange}
        />

        <button className="notes-submit-btn" type="submit">
          Save Notes
        </button>
      </form>
    </div>
  );
};

export default NotesInput;
