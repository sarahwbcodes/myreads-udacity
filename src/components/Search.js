import React from 'react';
import {
  Link
} from 'react-router-dom';
import sortBy from 'sort-by'
//import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
//import * as BookData from '../BooksAPI'


export default class Search extends React.Component {
    state = {
      query: '',
      books: []
    }

    searchUpdate = (query) => {
      this.setState({
        query: query.trim()
      })
    }

    searchClear = () => {
      this.setState({
        query: ''
      })
    }
    render() {
      //search and result functionality courtesy of Udacity's React lessons (edited since then)
      const {
        query
      } = this.state
      const {
        books
      } = this.props
      //lookUpBook = (query) => BookData.search()
      let bookResults
      if (query) {
        //so we can ignore any special characters and pass them as object literals
        const result = new RegExp(escapeRegExp(query), 'i')
        bookResults = books.filter((book) => result.test(book.title))
      } else {
        bookResults = books
        /*return <div >
        < span > "No books found" < /span>
        <span onClick={this.searchClear}>"try again"</span >
        < span > "or" < /span>
        <Link to={`\`}><span>"go back"</span>< /Link>
        </div>*/
      }
      bookResults.sort(sortBy('title')
      return ( <
          div className = "search-books" >
          <
          div className = "search-books-bar" >
          <
          Link to = {
            `/`
          }
          className = "close-search" > Close < /Link> <
          div className = "search-books-input-wrapper" >
          <
          input type = 'text'
          value = {
            query
          }
          onChange = {
            (event) => this.searchUpdate(event.target.value)
          }
          placeholder = "Look up a book through its title or its author" /
          >
          <
          /div> <
          div className = "search-book-results" >
          <
          ol className = "books-grid" > {
            bookResults.map((book) => ( <
              li key = {
                book.id
              } >
              <
              Book content = {
                book
              }
              shelfSwitch = {
                this.shelfSwitch
              }
              /> <
              /li>
            ))
          } <
          /ol> <
          /div>
        )
      }
    }
