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
      console.log("database sending good vibes")
    }
  });
};

// var selectJuguetes = function(callback) {
//   connection.query('SELECT * FROM items WHERE category IN ('jugete')', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };



module.exports.selectAll = selectAll;
