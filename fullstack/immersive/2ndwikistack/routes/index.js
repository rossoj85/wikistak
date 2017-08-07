const wikiRouter = require('./wiki')
const userRouter= require('./user')
const express= require('express')
const router= express();

router.use('/wiki', wikiRouter)
router.use('/users', userRouter)

router.get('/', function(req, res, next) {
    res.send("index");
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});











// router.get('/', function(req, res, next) {
//     console.log('YOOOO');
//   res.render('index');
// });

// router.post('/', function(req, res, next) {
//     res.render()
//     // Page.findOrCreate({ 
//     //         where: {
//     //             email: req.body.authorEmail,
//     //             name: req.body.authorName
//     //         }
//     // }).spread()
// });

// router.get('/add', function(req, res) {

//     res.render('addpage');
// });
module.exports = router;