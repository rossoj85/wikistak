const express = require('express');
const router = express();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 
// ...
// router.use('/wiki', () => require('wikiRouter'));
// or, in one line: router.use('/wiki', require('./wiki'));



router.get('/add', function(req, res, next) {
  res.render('addpage');
});
router.get('/users',function(req,res,next){
    res.redirect('/');
});

router.get('/', function(req, res, next) {
    res.redirect('/');
});



router.post('/', function(req, res, next) {

  var page = Page.build({
    title: req.body.title,
    content: req.body.content
    // urlTitle: req.body.urlTitle,
    // status: req.body.status,
    // date: mew Date('Now')

});
//   var user  = User.build({
//     name: req.params.user,
//     email: req.params.email
//   })

  page.save();

});
// router.post('/',function(req,res,next){
//     console.log(req.body.title)
//     res.render('wikipage',{})
// });
module.exports = router;