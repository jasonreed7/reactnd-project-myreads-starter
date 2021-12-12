import React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShelfChange = (e) => {
    this.props.moveBookToShelf(this.props.book, e.target.value)
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ?
                `url("${this.props.book.imageLinks.thumbnail}")` :
                'none'
            }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.book.shelf} onChange={this.handleShelfChange} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    );
  }
}
