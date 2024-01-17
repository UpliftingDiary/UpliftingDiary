import React from 'react';

const NoteItem = ({ date, content }) => {
  return <div className='note-item'>{date.slice(0, 10)}</div>;
};
export default NoteItem;
