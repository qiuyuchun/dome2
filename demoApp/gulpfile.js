	var gulp=require("gulp")
	var fs=require("fs")
	//本地服务器模块
	var connect=require("gulp-connect")   //接受请求
	//本地服务器编译响应
	var respond=require("gulp-respond")  
	//压缩js
	var uglify = require("gulp-uglify")   //压缩 js
	var concat = require("gulp-concat")		//合并js
	var ngAnnotate = require("gulp-ng-annotate")
	var ngmin = require("gulp-ngmin")  //文件重命名   angular 压缩
//清空 
var clean = require("gulp-clean")

	var minifyCss = require ('gulp-minify-css')
//压缩html
	var minifyHtml = require("gulp-minify-html")  //压缩html
	var rename = require("gulp-rename")

//加密 
var rev = require("gulp-rev")  //加密 
var revCollector = require("gulp-rev-collector")  //替换

//css压缩
gulp.task('clean',function(){
	return gulp.src(['./src/js/min','./src/css/min','./src/min'])
		.pipe(clean())
})
gulp.task('minifyCss',['clean'],function(){
	return gulp.src('./src/css/*.css')
		.pipe(minifyCss())
		.pipe(concat('all.min.css'))
		.pipe(rev())
		.pipe(gulp.dest('./src/css/min/'))
		.pipe(rev.manifest('minifyCss.json'))  //生成json
		.pipe(gulp.dest('./src/'))
})

	gulp.task("minifyJs",['minifyCss'],function () {
		return gulp.src(["./src/js/app.js","./src/js/controller.js","./src/js/config.js","./src/js/directive.js"])   //引入文件   
			.pipe(ngAnnotate())    //angular 标准化
			.pipe(ngmin())       //angular 压缩
			.pipe(uglify())      // js 压缩
			.pipe(concat("all.min.js"))  //文件合并
			.pipe(rev())   //加密
			.pipe(gulp.dest("./src/js/min/"))   //输出  压缩成all.min.js   dest 定义文件写入的路径
			.pipe(rev.manifest('minifyJs.json') )   //json文件
			.pipe(gulp.dest('./src/'))
	})


	//main压缩
	gulp.task("minifyMain",["minifyJs"],function (argument) {
		return gulp.src("./src/main.html")    //引入文件
			.pipe(minifyHtml())
			.pipe(rename(function (path) {
				path.basename =  path.basename+""
			}))
			.pipe(gulp.dest("./src/min"))
	})
	gulp.task('rev',['minifyMain'],function(){
		return gulp.src(['./src/min.html','./src/minifyJs.json','./src/minifyCss.json'])
			.pipe(revCollector())
			.pipe(gulp.dest('./src/'))
	})

	gulp.task('watch',function(){
		gulp.watch(['src/main.html','src/js/*.js','src/css/*.css'],['rev'])
	})
 
	//启动服务器   task 注册一个任务，声明一个函数
	gulp.task("connect",function () {
		var params = {};
		//启动本地server
		connect.server({
			//多个root目录
			root:["./src",'./bower_components'],
			port:8090,
			livereload:true,
			// 本地server中间件，完成本地动态编译
			middleware:function(){      //如何响应服务器的请求
				return [function(req,res,next){     //开始处理事件
					next()
				},function(req,res){
					var path=req.url.split("?").shift();    //解析url 地址
					if(path == "/"){      //如果是第一次进人 引导到首页
						path = "/src/main.html"    
					}else{    
						path = "/src" + path
					}
					url = "." + path
					console.log(url);
					return gulp.src(url)
						.pipe(respond(res))
				}]
			}
		})
	})


//启动项目
gulp.task("serve",["rev","connect"])

