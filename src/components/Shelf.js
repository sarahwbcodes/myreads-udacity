import React from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'


export default class Shelf extends React.Component{
  propTypes= {
    title: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    //onChange: PropTypes.func.isRequired
  }
  render(){
    return(
      <div className="bookshelf">
      <h1 className="bookshelf-title">{this.props.title}</h1>
      <div className="bookshelf-books">
      <ol className="books-grid">
      {this.props.books.map(book)=>
        <li key={book.id}>
        <Book value={book} onChange=this.props.changeShelf(book,shelf)/>
        </li>
        </ol>
      </div>
    )
  }
}
