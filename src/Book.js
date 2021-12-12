import React from "react";

function Book(props) {

  function handleShelfChange(e) {
    props.moveBookToShelf(props.book, e.target.value)
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: props.book.imageLinks && props.book.imageLinks.thumbnail ?
              `url("${props.book.imageLinks.thumbnail}")` :
              'none'
          }}></div>
          <div className="book-shelf-changer">
            <select value={props.book.shelf} onChange={handleShelfChange} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors.join('; ') : ''}</div>
      </div>
    </li>
  );
}

export default Book
