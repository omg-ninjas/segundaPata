const mongoose = require('mongoose');
const Schema = mongoose.Schema


const itemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  messages: {
    user:String,
    message:String
  },
})

exports.Items = mongoose.model('item', itemSchema);
