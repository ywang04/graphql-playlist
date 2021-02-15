import React, { useState } from 'react';
import BookDetails from './BookDetails';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { loading, error, data: dataBooks } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = id => () => {
    setSelectedId(id);
  };

  return (
    <div>
      <ul id="book-list">
        {dataBooks?.books.map(({ id, name }) => (
          <li key={id} onClick={handleClick(id)}>
            {name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedId} />
    </div>
  );
};

export default BookList;
