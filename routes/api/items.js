const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

//create routes

//@route GET to api/ItemSchema
//@description Get all ItemSchema
//@access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

//@route POST to api/ItemSchema
//@description Create a post
//@access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
    newItem.save().then(item => res.json(item));
  });

module.exports = router;
