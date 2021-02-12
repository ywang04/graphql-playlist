import React from 'react';

const BookList = ({ bookList }) => {
  return (
    <ul id="book-list">
      {bookList.map(({ name }) => {
        <li>{name}</li>;
      })}
    </ul>
  );
};

export default BookList;
