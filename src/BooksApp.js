import React from 'react'
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BooksPage from './BooksPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = async () => {
    const books = await BooksAPI.getAll()
    this.setState({
      books
    })
  }

  moveBookToShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
    if (book.shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.concat([Object.assign({}, book, { shelf })])
      }))
    } else {
      this.setState(prevState => ({
        books: prevState.books.map(item => item.id === book.id ? Object.assign({}, item, { shelf }) : item)
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/"
            element={<BooksPage books={this.state.books} moveBookToShelf={this.moveBookToShelf} />}
          />
          <Route path="/search"
            element={<SearchPage books={this.state.books} moveBookToShelf={this.moveBookToShelf} />}
          />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
