import React from "react";
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom";

class SearchPage extends React.Component {
  state = {
    searchResults: []
  }

  moveBookToShelf = (book, shelf) => {
    this.props.moveBookToShelf(book, shelf)

    this.setState(prevState => ({
      searchResults: prevState.searchResults.map(item => item.id === book.id ? Object.assign({}, item, { shelf }) : item)
    }))
  }

  handleSearchChange = query => {
    if (!query) {
      this.setState({
        searchResults: []
      })
    } else {
      BooksAPI.search(query).then(searchResults => {
        if (!searchResults || searchResults.error) {
          searchResults = []
        }

        searchResults.forEach(book => {
          const assignedBook = this.props.books.find(shelvedBook => shelvedBook.id === book.id)
          if (assignedBook) {
            book.shelf = assignedBook.shelf
          } else {
            book.shelf = 'none'
          }
        });
        this.setState({ searchResults })
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <SearchInput handleChange={this.handleSearchChange} />
        </div>
        <SearchResults searchResults={this.state.searchResults} moveBookToShelf={this.moveBookToShelf} />
      </div>
    );
  }
}

export default SearchPage
