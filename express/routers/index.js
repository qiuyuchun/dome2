//规范写法
/*var express=require('express');
var router=express.Router();
//定义在router上名为  / 的路由
router.get('/',function(req,res,next){
	res.render('index',{
		title:'index页面',
		data:[
			{name:'index1',age:11},
			{name:'index2',age:22},
			{name:'index3',age:33}
		]
	})
})
module.exports=router;  //抛出router
*/

/*  

module.exports=function(req,res,next){
	//res.send('hello');
	res.render('index',{
		title:'index页面',
		data:[
			{name:'index1',age:11},
			{name:'index2',age:22},
			{name:'index3',age:33}
		]
	})     //render  渲染
}
*/




 