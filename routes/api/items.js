const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

//create routes

//@route GET to api/items
//@description Get all ItemSchema
//@access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

//@route POST to api/items
//@description Create an item
//@access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
    newItem.save().then(item => res.json(item));
  });

  //@route DELETE to api/items/:id
  //@description Delete an item
  //@access Public

  router.delete('/:id', (req, res) => {
    Item.findById(req.params.id) //fetch id from the URI
      .then(item => item.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false}));
  })



module.exports = router;
