import React from "react";
import Book from "./Book";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.props.searchResults.map(book => (
              <Book book={book} moveBookToShelf={this.props.moveBookToShelf} key={book.id} />
            ))
          }
        </ol>
      </div>
    );
  }
}

export default SearchResults
