const {Items} = require('../database/schema.js');

// Search for items by category
exports.Search = (req, res) => {
  const {query} = req.query;
  Items.find({category: query}).exec((err, items) => {
    if (err) {
      console.error(err);
    } else {
      res.json(items);
    }
  });
};
