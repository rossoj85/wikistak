const wikiRouter = require('./wiki')
const userRouter= require('./user')
const express= require('express')
const router= express();

router.get('/',  (req,res,next) =>  { 
    res.send('asdassd');

})

module.exports = router;