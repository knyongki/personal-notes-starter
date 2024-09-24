import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ notes, onDelete, onArchive, addNote }) {
  const activeNotes = notes.filter((note) => !note.archived);

  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote}/>
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />

      <h2>Arsip</h2>
      <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteBody;
