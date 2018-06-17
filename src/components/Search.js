import React from 'react';
import {
  Link
} from 'react-router-dom';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import * as BookData from '../BooksAPI'


export default class Search extends React.Component {
    state = {
      query: '',
      bookResults: []
    }

    searchUpdate = (query) => {
      this.setState({
        query: query.trim()
      })
      this.bookSearch(query);
    }

    searchClear = () => {
      this.setState({
        query: ''
      })
    }
    //search and result functionality courtesy of Udacity's React lessons
    //search through data
    bookSearch(query) {
      BookData.search(query).then(bookResults => {
        bookResults ?
        this.setState({bookResults}) : this.setState({bookResults:[]})
        console.log(bookResults);
    }).catch(
        // Log the rejection reason
        (reason) => {
          console.log('Handle rejected promise ('+reason+') here.');
        });
      // this.setState({
      //   query
      // })
    }
    //display the books
    resultsMap() {
      if (this.state.query) {
        //so we can ignore any special characters and pass them as object literals
        const result = new RegExp(escapeRegExp(this.state.query), 'i')
        this.state.bookResults = this.props.books.filter((book) => result.test(book.title))
      } else {
        this.state.bookResults = this.props.books
      }
    };

    print = (book)=>
    console.log(book);

    render() {
      // this.state.bookResults.sort(sortBy('title'))
      const bookResults = this.state.bookResults;
      this.print(bookResults)
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to={`/`} className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
            <input type='text' value={this.state.query} onChange={(event)=>this.searchUpdate(event.target.value)} placeholder="look up books by title or author"/>
            </div>
          </div>
          <div className="search-book-results">
            <ol className="books-grid">
              {bookResults && bookResults.length > 0 && bookResults.map((book)=>(
                <li key={book.id}>
                  <Book content={book} shelfSwitch={this.shelfSwitch} bookSearch={this.bookSearch}/>
                </li>))
              }
            </ol>
          </div>
        </div>

      )
    }
  }
