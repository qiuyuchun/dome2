//规范写法
var express=require('express');
var router=express.Router();
router.get('/product',function(req,res,next){
	res.render('product',{
		title:'product页面',
		data:[
			{name:'product1',age:11},
			{name:'product2',age:22},
			{name:'product3',age:33}
		]
	})
})
module.exports=router;




/*module.exports = function(req,res,next){
	res.render('list',{
		title:'listÄĹ ',
		data:[
			{name:'list1',age:11},
			{name:'list2',age:22},
			{name:'list3',age:33}
		]
	})  
}*/
 