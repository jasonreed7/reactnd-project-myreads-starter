import Book from "Book";
import React from "react";

export default class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  filterBooks() {
    return this.props.books.filter(book => book.shelf === this.props.bookshelf.name)
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.filterBooks().map(book => (
                <Book book={book} moveBookToShelf={this.props.moveBookToShelf} key={book.id} />
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}
