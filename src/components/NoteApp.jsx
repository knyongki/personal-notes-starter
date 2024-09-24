import React from "react";
import {getInitialData} from "../utils/index.js";
import NoteHeader from "./NoteHeader.jsx";
import NoteBody from "./NoteBody.jsx";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived}
      }
      return note;
    });

    this.setState({notes});
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} addNote={this.onAddNoteHandler}/>
      </div>
    );
  }
}

export default NoteApp;