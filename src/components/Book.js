import React from 'react'
export default class Book extends React.Component{

  // Here, we want the select option changed, we get the value of it and pass it to the parent
handleChange = (event) => {
  this.props.shelfswitch(this.props.content, event.target.value)
}
  render(){
    //const bookOrder=this.props.state.book.sort(sortBy('title'))
    return(
      <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+`${this.props.content.imageLinks.smallThumbnail}`+')'}}></div>
                      <div className="book-shelf-changer">
                        <select book={this.props.content} onChange={this.handleChange} >
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    </div>
    )
  }
}
