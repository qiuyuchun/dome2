var express = require('express')
var router = express.Router()

router.get('/index',function(req,res){
	res.send('index  ---  page')
})

router.get('/list',function(req,res){
	res.send('index  ---  page')
})


module.exports = router    //全局抛出router