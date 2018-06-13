import React from 'react';
import  {Link} from 'react-router-dom';
import sortBy from 'sort-by'
import Book from './Book'
import * as BookData from '../BooksAPI'

export default class Search extends React.Component{
  // State should be empty always at the start
  // add value later
  state={
    query: '',
    results: []
  };
  searchUpdate=(query) => {
       this.setState({query})
    BookData.search(query).then(results =>{
      if(results){
      results.map(result => {
        for()
        if(Book.id===result.id && result.length>0){
        this.setState({results:results})
        }
        else{
        this.setState({results:[]})
        }
      } 
    )
  }  
  })
}
  searchClear= () => {
    this.setState({query:''})
  }

render(){
  return(
<div className="search-books">
<div className="search-books-bar">
<Link to={`/`} className="close-search">Close</Link>
<div className="search-books-input-wrapper">
<input type='text'
value={this.state.query}
onChange={(event)=>this.searchUpdate(event.target.value)}
placeholder="Search by a book title or author name"
/>
</div>
</div>
<div className="search-book-results">
<ol className="books-grid">
{this.state.results && this.state.results.sort(sortBy('title')).map((book)=>(
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

