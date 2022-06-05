import React, { useContext } from 'react';
import { INote, NoteType } from '../../constants/notes.config';
import './Note.scss';
import { SoundContext } from '../../providers/SoundProvider';

export interface INoteProps { 
  note: INote,
}
const Note: React.FC<INoteProps> = ({note}) => {
  const { playNote } = useContext(SoundContext);

  return (
    <div 
      className={`note ${note.type} ${note.key}`} 
      onClick={() => playNote(note.hz)}>
      {note.key} 
    </div>
  );
}
export default Note;
