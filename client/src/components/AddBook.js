import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from './queries/queries';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const { data } = useQuery(getAuthorsQuery);
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={e => setBookName(e.target.value)}
          value={bookName}
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={e => setGenre(e.target.value)}
          value={genre}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {data?.authors.map(({ name, id }) => {
            return <option key={id}>{name}</option>;
          })}
        </select>
      </div>

      <button onClick={handleClick}>+</button>
    </form>
  );
};

export default AddBook;
