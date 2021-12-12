import Book from "Book";
import React from "react";

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            filterBooks(props.books, props.bookshelf.name).map(book => (
              <Book book={book} moveBookToShelf={props.moveBookToShelf} key={book.id} />
            ))
          }
        </ol>
      </div>
    </div>
  );
}

function filterBooks(books, shelf) {
  return books.filter(book => book.shelf === shelf)
}

export default Bookshelf
