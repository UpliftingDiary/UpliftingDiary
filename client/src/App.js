import React, { useState } from 'react';
import Quote from './components/Quote.jsx';
import NotesPanel from './components/NotesPanel.jsx';
import { FaRegCalendarPlus } from 'react-icons/fa';

const App = () => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  const toggleNotesVisibility = () => {
    setIsNotesVisible(!isNotesVisible);
  };

  return (
    <div className="main-container">
      <Quote />
      <FaRegCalendarPlus className="addIcon" onClick={toggleNotesVisibility} />
      {isNotesVisible && <NotesPanel />}
    </div>
  );
};

export default App;
