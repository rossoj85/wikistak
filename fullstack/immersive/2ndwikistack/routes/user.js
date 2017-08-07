const express = require('express');
const router = express();

// ...
// router.use('/wiki', () => require('wikiRouter'));
// or, in one line: router.use('/wiki', require('./wiki'));
router.get('/users' , (req,res,next)=> { 
    console.log(req);
    Sequelize.findAlll({ 
        where: {
            name: req.param.title
        }
    })
})

module.exports = router;