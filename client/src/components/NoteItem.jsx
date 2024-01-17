import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectNote } from '../redux/actions/actions';

const NoteItem = ({ date, content }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(setSelectNote({ date, content }));
  };
  console.log(date);

  const dateObj = new Date(date); //turn it into a js date object
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const dateStr = `${year}-${month}-${day}`;

  return (
    <div className='note-item' onClick={handleSelect}>
      {dateStr}
    </div>
  );
};
export default NoteItem;
