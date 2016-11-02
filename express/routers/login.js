//规范写法
var express=require('express');
var router=express.Router();
var fs=require('fs');

 //console.log(router);
 /*var name="qq";
 var mma="111";*/

router.post('/login',function(req,res,next){

	console.log(req);
	console.log('00');
	//console.log(req.body)

	if(req.body.username!="qq" && req.body.password!="111"){
		//res.send('用户名密码错误！')
		res.redirect('http://localhost:8090/#/login');
	}else{
		res.redirect('http://localhost:8090/#/index');
	}
})

module.exports=router; 

/*

var express=require("express")
var router=express.Router();

var sqluser="lijiajia",
	sqlpas="123456";
router.post("/signUp",function(req,res){
	//console.log("成功访问到signUP")
	//console.log(req.body)
	//res.end('iiooo');
	var user=req.body.username,
		pas=req.body.password;
		console.log(user+'----'+pas);
	if(user!=sqluser || pas!=sqlpas){
		/ar json=JSON.stringify({code:1,msg:'密码错误'})
		res.writeHead(200,{"Content-Type":"textml;charset=utf-8"})
		res.end('用户错误')
		//res.end(json)
	}else{
		res.redirect('http://localhost:8008/#/index')//重新指向地址
	}

})

module.exports=router;



*/






