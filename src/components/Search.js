import React from 'react';
import  {Link} from 'react-router-dom';
import sortBy from 'sort-by'
import Book from './Book'
import * as BookData from '../BooksAPI'

state={
    query:''
}

searchUpdate = (query) => {
    this.setState({query: query.trim()})
}

searchClear = () => {
    this.setState({query:''})
}
export default class Search extends React.Component{
    render(){
        //search and result functionality courtesy of Udacity's React lessons
        const {query} = this.state
        let bookResults
        if (this.state.query){
            //so we can ignore any special characters and pass them as object literals
        const result = new RegExp(escapeRegExp(query), 'i')
        bookResults = this.props.books.filter((book)=> result.test(book.title))
        }else{
            bookResults = this.props.books
        }

        bookResults.sort(sortBy('title'))
        return(
      <div className="search-books">
      <div className="search-books-bar">
      <Link to={`/`} className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
      <input type='text'
      value={query}
      onChange={(event) => this.searchUpdate(event.target.value)}
      placeholder="Search by a book title or author name"
      />
      <button onClick={this.searchClear}>Show all books</button>
      </div>
      </div>
      <div className="search-book-results">
      <ol className="books-grid">
      {bookResults.map((book)=>(
        <li key={book.id}>
        <Book content={book} shelfSwitch={this.shelfSwitch}/>
        </li>
      ))
      }
      </ol>
      </div>
      </div>
        )}
      }