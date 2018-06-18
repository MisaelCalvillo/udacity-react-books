import React, { Component } from 'react';

/* Import the API functions */
import { get, getAll, update, search }  from './../../assets/API/BooksAPI';

// Import other components
import Book from './../Book/Book';

class Bookshelf extends Component {

  state = {
    books: []
  }

  renderMyBooks = () => {
    const { books } = this.state

    if(books.length > 0) {
      return books.map( book => ( 
        <Book 
          bookImage = { book.imageLinks.thumbnail }
          bookTitle = { book.title }
          bookAuthors = { book.authors }
          key = { book.id }
        />
      ))
    } else {
      return <div>No hay en este momento {':('}</div>
    }
  }

  componentDidMount() {
    getAll().then( data => {
      this.setState(() => ({
        books: data
      }));
      console.log(data);
    }).catch( error => console.log(error))
  }

  render(){
    console.log("State: ", this.state);
    return(
      <div className="Bookshelf">{this.renderMyBooks()}</div>
    )
  }
}

export default Bookshelf;