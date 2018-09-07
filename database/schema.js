const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var  = new Schema(
{
  id: ObjectId
  username: string,
  description: string,
  category: string,
  subcategory: string,
  price: string,
  comments:[
          {
            user: string,
            comment: string
          }
        ]
});

exports.Users = mongoose.model('user', userSchema);
exports.Vendors = mongoose.model('v')
