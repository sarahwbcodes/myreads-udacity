import React from 'react'
import Book from './Book'


export default class Shelf extends React.Component{
  render(){
    return(
      <div className="bookshelf">
      <h1 className="bookshelf-title">{this.props.title}</h1>
      <div className="bookshelf-books">
      <ol className="books-grid">
      {this.props.books.map(book)=>
        <Book
        key={book.id}
        />
      </div>
    )
  }
}
