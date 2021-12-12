import React from "react";
import Book from "./Book";

function SearchResults(props) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {
          props.searchResults.map(book => (
            <Book book={book} moveBookToShelf={props.moveBookToShelf} key={book.id} />
          ))
        }
      </ol>
    </div>
  );
}

export default SearchResults
