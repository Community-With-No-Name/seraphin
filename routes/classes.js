var express = require('express');
var router = express.Router()
router.get('/', (req,res)=>{
    res.render('class/index')
})
router.get('/sub', (req,res)=>{
    res.render('class/sub')
})

module.exports = router