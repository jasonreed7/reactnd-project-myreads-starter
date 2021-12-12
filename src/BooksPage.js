import Bookshelf from 'Bookshelf.js'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bookshelves } from './booksAppConstants.js'

export default class BooksPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map((bookshelf, index) => (
              <Bookshelf bookshelf={bookshelf} books={this.props.books} moveBookToShelf={this.props.moveBookToShelf} key={index} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}
