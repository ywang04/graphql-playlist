import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from './queries/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul id="book-list">
      {data?.books.map(({ name, id }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default BookList;
