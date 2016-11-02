//规范写法
var express=require('express');
var router=express.Router();
var fs = require('fs');
//定义在router上名为  / 的路由
router.get('/first',function(req,res,next){
	
	fs.readFile('./getData/index.json',function(err,data){
		res.jsonp( JSON.parse(data) );
	})
})

module.exports=router;  //抛出router