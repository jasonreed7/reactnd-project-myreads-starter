import Bookshelf from 'Bookshelf.js'
import React from 'react'
import { Link } from 'react-router-dom'
import { bookshelves } from './booksAppConstants.js'

function BooksPage(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((bookshelf, index) => (
            <Bookshelf bookshelf={bookshelf} books={props.books} moveBookToShelf={props.moveBookToShelf} key={bookshelf.name} />
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

export default BooksPage
