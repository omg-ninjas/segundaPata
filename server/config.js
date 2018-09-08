const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const compression = require('compression');

const app = express();

// middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));


app.get('/search?:query', route.Search);

//app.post('/addItem', route.AddVendor);


module.exports = app;
