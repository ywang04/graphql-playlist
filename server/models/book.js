const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

// model means collection(table) in mongodb
module.exports = mongoose.model('Book', bookSchema);
