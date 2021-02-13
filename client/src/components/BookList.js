import React from 'react';
import { gql, useQuery } from '@apollo/client';

const BookList = () => {
  const { loading, error, data } = useQuery(gql`
    {
      books {
        name
        genre
        id
      }
    }
  `);
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
