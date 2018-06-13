import React from 'react'
import Book from './Book'

export default class Shelf extends React.Component{

  render(){
    return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.title}</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
{this.props.books.map((book)=>(
  <li key={book.id}>
  <Book content={book} shelfswitch={this.props.shelfswitch}/>
  </li>
))}

     </ol>
  </div>
   </div>


    )
  }
}
