// const express = require('express');
// const router  = express.Router();
const router = require('express').Router();
const Item = require('../models/Item')

router.get('/', (req, res, next) => {
  Item.find()
    .then(items => {
      res.render('all-items', {
        items: items
      });
    })
})

router.get('/add', (req, res, next) => {
  res.render('add-item')
})

router.post('/add', (req, res, next) => {
  Item.create({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  })
    .then(itemCreated => {
      res.redirect('/items')
    })
    .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => {
      res.render('edit-item', { item })
    })
})

router.post('/:id/edit', (req, res, next) => {
  Item.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  })
    .then(item => {
      res.redirect('/items')
    })
})

module.exports = router;
