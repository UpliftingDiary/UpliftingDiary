import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { viewAllNotes } from '../redux/actions/actions';
import NoteItem from './NoteItem.jsx';

const Notes = () => {
  // @desc    Get all notes
  // @route   GET api/notes
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(viewAllNotes());
  }, [dispatch]);

  console.log('notesList:', notesList);
  return (
    <div className='notes'>
      {/* render all notes from DB */}
      {notesList.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          date={note.date}
          content={note.input}
        />
      ))}
    </div>
  );
};

export default Notes;
