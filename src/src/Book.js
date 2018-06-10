import React from 'react'

export default class Book extends React.Component{

  render(){
    return(
      <li key={book.id}>
            <div className="book">
          <div className="book-top">
        <div className="book-cover" style={{width: 128, height: 192, backgroundImage:`url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail:'./icons/placeHolder.zoom.jpg'})`}}>
      <div className="book-shelf-changer">
      <select value={this.state.shelf || this.props.book.shelf} onChange={(event)=>{this.props.changeShelf(this.props.book, event.target.value);} >
        <option value="" disabled>Move to..</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="read">Read</option>
        <option value="wantToRead">Want to Read</option>
        <option value="none">None</option>
      </select>
      </div>
    </div>
    </div>
  <div className="book-title">{this.props.book.title}</div>
  <div className="book-authors">{this.props.book.authors}</div>
</div>
</li>
    )
  }
}
