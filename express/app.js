//启动 node-dev app     项目的入口文件
var express = require('express')

var app = express();  //app可以调用express的所有方法

var ejs=require('ejs');  //模板引擎
var bodyParser=require('body-Parser')

app.set('views',__dirname+'/views/')
app.set('view engine','ejs')
//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./config/configRouter.js')(app);    
var server = app.listen(3001,function(){
	//console.log('start 3001') 
	//console.log(server.address())
})

console.log(3001)

/*app.get('/list',function(req,res,next){
	//res.send('hello');
	res.render('list',{
		title:'list页面',
		data:[
			{name:'list1',age:11},
			{name:'list2',age:22},
			{name:'list3',age:33}
		]
	})     //render  渲染
}*/
//优化方法  将所有的路由都写在routers文件夹下   默认配置文件在config文件夹

/*app.get('/',function(req,res,next){   //页面跳转用get   post 列如form和Ajax提交时用 
	//res.send('首页')
})*/
//
/*app.all('/',function(req,res,next){
	console.log('all  匹配')
	next();
})*/
      //res.end()  方法  终止程序，并且输出一段话
//注册路由 一个get请求  '/'代表首页,根路径
// app.get('/',function(req,res,next){   //页面跳转用get   post 列如form和Ajax提交时用 
// 	console.log('开始匹配index');   //中间件
// 	next();
// },function(req,res){
// 	console.log('匹配到index');
// })

// app.get('/list',function(req,res){   //页面跳转用get   post 列如form和Ajax提交时用 
// 	res.send('list首页')
// })

// app.post('/userList',function(req,res){   //页面跳转用get   post 列如form和Ajax提交时用 
// 	var json = {code:0,msg:'成功'}
// 	res.json(json)
// })


// //匹配任何路径中含有 a 的路径  z正则匹配
// app.get(/a/,function(req,res){
// 	res.send('匹配所有带有a的路由')
// })

//定义了 一个方法（路由），拆分成两种请求方式,用来匹配这两中方式
/*app.route('/index')
	.get(function(req,res){
		res.send('get /index')
	})
	.post(function(req,res){
		res.send('post /index')
	})
	.put(function(req,res){
		res.send('put /index')
	})
*/

// var conf = require('./config.js');

// console.log(conf)
// //app express的对象   use  挂载一个中间件
// app.use('/banwei',conf)

/*中间件学习*/


/*app.use('/user/:id',function(req,res,next){
	//console.log(req.url)  找不到
	//console.log(req.originalUrl)  //匹配原始的url
	console.log('time:'+new Date())  
	next();  //继续往下执行
})
//:后面的是pamars的key
app.get('/user/:name',function(req,res){
	var name=req.params.name;
	res.send(name);
})*/

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
/*app.get('/user/:id',function(req,res,next){
	 //如果等0，让下一个路由执行
	if(req.params.id == 0) next('route');
		
	else next();//执行下一个
},function(req,res){
	res.send('index')
})

//下一个路由
app.get('./user/:name',function(req,res,next){
	res.send('name')
})
*/


