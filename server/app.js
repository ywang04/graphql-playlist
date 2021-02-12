const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
// have to use require even for local file
const schema = require('./schema/schema');

const app = express();

/**
 connect to mongodb database
 make sure to replace db string with my own
 *  */

const uri =
  'mongodb+srv://ywang04:mysql_is_better@cluster0.qr15t.mongodb.net/playlist?retryWrites=true&w=majority';
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('Error: ', err.message));

/**
https://github.com/graphql/express-graphql
express doesn't know what the graphql is, so need express-graphql to understand
*/
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
