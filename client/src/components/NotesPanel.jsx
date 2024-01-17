import React from 'react';
import NotesInput from './NotesInput.jsx';
import Notes from './Notes.jsx';

const NotesPanel = () => {
  return (
    <div className="notes-container">
      <NotesInput />
      <Notes />
    </div>
  );
};

export default NotesPanel;
