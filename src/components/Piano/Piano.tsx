import React from 'react';
import { NOTES_CONFIG } from '../../constants/notes.config';
import Note from '../Note/Note';
import './Piano.scss';

const Piano = () => {
  return (
    <div className="piano">
        {NOTES_CONFIG.map(note => <Note note={note}></Note>)}
    </div>
  );
}

export default Piano;
