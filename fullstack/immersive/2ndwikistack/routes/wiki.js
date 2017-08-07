const express = require('express');
const router = express();

// ...
// router.use('/wiki', () => require('wikiRouter'));
// or, in one line: router.use('/wiki', require('./wiki'));


router.get('/', function(req, res, next) {
    console.log('YOOOO');
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});

module.exports = router;