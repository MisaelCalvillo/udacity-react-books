import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { bookImage, bookTitle, bookAuthor } = this.props;

    return (
        <div className="Book">
          <img className="Book_image" src={ bookImage } alt="Book cover"/>
          <div className="Book_edit">
            <a className="Book_edit--icon" href="#" title="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path  d="M0 0h24v24H0z" fill="none"/>
                <path  className="white" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </a>
          </div>
          <p className="Book_title">{ bookTitle }</p>
          <p className="Book_author">{ bookAuthor }</p>
        </div>
    );
  }
}

export default Book;