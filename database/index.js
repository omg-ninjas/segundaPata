var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode',
  database : 'segundaPata'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
      console.log("database sending good vibes to bruno")
    }
  });
};

const insertProduct = function(description, quantity, cb) {
  connection.query(
    'INSERT INTO items (name, description, price, category, email, vendor) VALUES (?, ?, ?, ?, ?, ?)',
    [name, description, price, category, email, vendor],
    (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    }
  );
};




module.exports.selectAll = selectAll;
module.exports.insertProduct = insertProduct;
