import React from 'react';
import  {Link} from 'react-router-dom';
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

export default class Search extends React.Component{
  state={
    query: event.target.value,
    results: []
  };
  updateQuery=(query) => {
    this.setState({query})
    BooksAPI.search(query || query.trim()).then(results)=>{
      results.map(result)=> if(book.id===result.id && result.length>0){
        return this.state.book.shelf
        this.setState({results:results})
      }
    }
  }
  else{
    this.setState({results:[]})
  }
  clearQuery= () => {
    this.setState({query:''})
  }

render(){
<div className="search-books">
<div className="search-books-bar">
<Link to="/" className="close-search">Close</Link>
<div className="search-books-input-wrapper">
<input type='text'
value={this.state.query}
onChange={(event)=>this.updateQuery(event.target.value.trim())}
placeholder="Search by a book title or author name"
/>
</div>
</div>
<div className="search-book-results">
<ol className="books-grid">
{results.sort(sortBy('title')).map=>{
  <li key={book.id}>
  <Book value={book} onChange=this.props.changeShelf(book, shelf)/>
  </li>
}}
</ol>
</div>
</div>
}
}
}
