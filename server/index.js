var express = require('express');
var bodyParser = require('body-parser');

 var items = require('../database/index.js');


var app = express();

 app.use(express.static(__dirname + '/../client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("get all items request performed")
      res.json(data);
    }
  });
});

app.post("/item", function(req, res) {
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let category = req.body.category;
  let email = req.body.email;
  let vendor = req.body.vendor;

  if (!name) {
    res.sendStatus(400);
  } else {
    items.insertProduct(name, description, price, category, email,vendor, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});
