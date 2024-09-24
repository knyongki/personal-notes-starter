import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-serach">
        <input type="text" placeholder="Cari catatan..." />
      </div>
    );
  }
}

export default NoteSearch;
