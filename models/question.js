const mongoose = require('mongoose');

  
const questionSchema = {
    person: String,
    question: String
  };
 module.exports = mongoose.model('Question', questionSchema);
