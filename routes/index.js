const express = require('express');
const router  = express.Router();

console.log("outside");


/* GET home page */
router.get('/', (req, res, next) => {
  console.log("inside");

});

module.exports = router;
