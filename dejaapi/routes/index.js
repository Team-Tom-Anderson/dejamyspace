var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/friends', function(req, res, next) {
knex('friends').select('*').then(friends=>{
  res.send(friends);
});
});

module.exports = router;
