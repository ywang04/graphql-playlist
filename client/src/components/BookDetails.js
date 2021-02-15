import React, { useEffect } from 'react';
import { getBookQuery } from '../queries/queries';
import { useLazyQuery } from '@apollo/client';

// https://www.apollographql.com/docs/react/data/queries/
// https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery
const BookDetails = ({ bookId }) => {
  const [fetchQuery, { data }] = useLazyQuery(getBookQuery, {
    variables: { id: bookId },
  });

  // when clicking book then running the query
  useEffect(() => {
    if (bookId) {
      fetchQuery();
    }
  }, [bookId]);

  const displayBookDetails = () => {
    const { book } = { ...data };
    if (bookId) {
      return (
        <div>
          <h2>{book?.name}</h2>
          <p>{book?.genre}</p>
          <p>{book?.author.name}</p>
        </div>
      );
    } else {
      return <div>No Book selected...</div>;
    }
  };

  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
