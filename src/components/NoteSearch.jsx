import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="note-serach">
        <input type="text" placeholder="Cari catatan..." onChange={this.onSearchChangeHandler} />
      </div>
    );
  }
}

export default NoteSearch;
