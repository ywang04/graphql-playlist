import { ApolloClient, ApolloProvider } from '@apollo/client';
import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Yang's Reading List</h1>
        <BookList bookList={bookList} />
      </div>
    </ApolloProvider>
  );
}

export default App;
