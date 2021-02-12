import { useEffect } from 'react';
import BookList from './components/BookList';

function App() {
  useEffect(() => {

  });
  return (
    <div id="main">
      <h1>Yang's Reading List</h1>
      <BookList bookList={bookList} />
    </div>
  );
}

export default App;
