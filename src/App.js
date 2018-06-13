import React from 'react';
import * as BookData from './BooksAPI';
import Shelf from './components/Shelf';
import  {Route,Link} from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import Search from './components/Search';

export default class BooksApp extends React.Component {
constructor(){
  super();
}
//to ensure everything's in their right place. books, as seen in state, are required to be arrays in order to work.
// and for the shelf change/switch to occur, then shelfswitch should work as a function. 
static propTypes ={
  books: PropTypes.array.isRequired,
  shelfSwitch: PropTypes.func.isRequired
}
//states are left blank, data is added later through the component did mount and update
state = {
  books: []
}
//to get data from the API and enable its manipulation as it is not static HTML but fetched from
//the books JSON. Here the books fetched are set as the state of the component to ensure them showing up on the UI.
  componentDidMount(){
    BookData.getAll()
    .then((books) => {
      this.setState({books});
      console.log(books);
    });
    //console logs are also another precaution to check if everything's working smoothly
    console.log(this.state.books);
}
//this ensures the UI is up to date with any changes that may occur on props or state
componentWillUpdate(){
  BookData.getAll()
  .then((books) => {
    this.setState({books});
    console.log(books);
  });
}

// We take two parameters, book we want to update, & the new shelf
shelfSwitch = (book,shelf) => {
  // You can view the implmentation in BookAPI.js
  BookData.update(book,shelf)
}

//a function that is an extension of the search component, if it even works rn. 
/*lookUpBook= () =>{
  BookData.search(query).then
}*/

// a function to filter out the book arrays so each will reside in their respective shelves
booksByShelf = (shelf) => this.state.books.filter((book) => book.shelf === shelf)

  render() {
    return (
      <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    
    <Route exact path="/" render={()=>(
      <div>
  <Shelf title={"Currently Reading"} books={this.booksByShelf('currentlyReading')} shelfswitch={this.shelfSwitch}/>
  <Shelf title={"Want to Read"} books={this.booksByShelf('wantToRead')} shelfswitch={this.shelfSwitch}/>
  <Shelf title={"Read"} books={this.booksByShelf('read')} shelfswitch={this.shelfSwitch}/>
  </div>
)}/>
        <div className='open-search'>
        <Link to={`/search`}> Search for a book </Link>
      </div>
      </div>
        <Route exact path="/search" render={()=>(
          <div>
          <Search
          query={this.state.query}
          bookResults={this.searchUpdate}
          shelfSwitch={this.shelfSwitch}
          />
          </div>
        )}/>
        </div>
    )}
}
