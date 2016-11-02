//用来控制路由


//引用路由文件
// var index = require('../routers/index.js')
// var list = require('../routers/list.js')
// var product = require('../routers/product.js')

var login = require('../routers/login.js')

//demoApp
var first = require('../routers/first.js')
var mineshop = require('../routers/mineshop.js')


//注册路由
module.exports = function(app){
	// app.get('/',index)
	// app.get('/list',list)
	// app.get('/product',product)
	
	app.post('/login',login)

	app.get('/first',first)
	app.get('/mineshop',mineshop)
}

 

//post  提交
//app.post('/login',login)
