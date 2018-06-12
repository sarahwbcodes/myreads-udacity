import React from 'react';
import * as BookData from './BooksAPI';
import Shelf from './components/Shelf';
import  {Route} from 'react-router-dom';
import './App.css';

export default class BooksApp extends React.Component {
constructor(){
  super();
}
state = {
  books: []
}
  componentDidMount(){
    BookData.getAll()
    .then((books) => {
      this.setState({books});
      console.log(books);
    });
    console.log(this.state.books);
}


/*componentWillUpdate(){
  BooksAPI.getAll()
  .then((books) => {
    this.setState({books});
    console.log(books);
  });
}*/

shelfSwitch = (book, shelf)=>{
  BookData.update(book, shelf)
  .then(book.shelf = shelf)
}

booksByShelf = (shelf) => this.state.books.filter((book)=> book.shelf === shelf)

  render() {
    return (
      <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
    <Route exact path="/" render={()=>(
  <Shelf title={"Currently Reading"} books={booksByShelf('currentlyReading')}/>
  <Shelf title={"Want to Read"} books={booksByShelf('wantToRead')}/>
  <Shelf title={"Read"} books={booksByShelf('read')}/>
)} />
        </div>
      </div>
        <Route exact path="/search" render={()=>(
          <div>
          <Search
          query={this.state.query}
          results={this.updateQuery}
          shelfSwitch={this.shelfSwitch}
          />
          </div>
        )}
        </div>
    )}
}
