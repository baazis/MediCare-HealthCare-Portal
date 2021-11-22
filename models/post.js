const mongoose = require('mongoose');

const postSchema = {
    name: String,
    email: String,
    question: String,
    answer: String,
    vote: Number
  };
  


 module.exports = mongoose.model('Post', postSchema);

