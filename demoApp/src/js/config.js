function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
	//console.log($stateProvider);
	//console.log($urlRouterProvider);
	//console.log($ocLazyLoadProvider);
	//$urlRouterProvider.otherwise('index/one')  
	$urlRouterProvider.otherwise('login')  

	$stateProvider

			//登录页
			.state('login',{
				url:'/login',
				templateUrl:'view/login.html',
				//controller:"login",
				resolve:{      //懒加载   点击那个页面调用哪个页面的代码
					loadPlugin:function($ocLazyLoad){
						return $ocLazyLoad.load([
						{
							files:['css/login.css']     
						}
						])
					}
				}
			})

			.state('index',{
					url:'/index',
					templateUrl:'view/index.html'
				})

			//理财页
			.state('licai',{
				url:'/licai',
				templateUrl:'view/licai.html',
				resolve:{      //懒加载   点击那个页面调用哪个页面的代码
					loadPlugin:function($ocLazyLoad){
						return $ocLazyLoad.load([
						{
							files:['css/licai.css']     
						}
							])
					}
				}
			})
				//理财科普页
				.state('licaikepu',{
					url:'/licaikepu',
					templateUrl:'view/licaikepu.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/licai.css']     
							}
								])
						}
					}
				})
			//生活页
			.state('shenghuo',{
				url:'/shenghuo',
				templateUrl:'view/shenghuo.html',
				resolve:{      //懒加载   点击那个页面调用哪个页面的代码
					loadPlugin:function($ocLazyLoad){
						return $ocLazyLoad.load([
						{
							files:['css/shenghuo.css']     
						}
							])
					}
				}
			})
				//生活====》手机充值页
				.state('shenghuo_chongzhi',{
					url:'/shenghuo_chongzhi',
					templateUrl:'view/shenghuo_chongzhi.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/shenghuo.css']     
							}
								])
						}
					}
				})
				//生活   ==》 游戏充值页
				.state('mine_game',{
					url:'/mine_game',
					templateUrl:'view/mine_game.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
			//我的页
			.state('mine',{
				url:'/mine',
				templateUrl:'view/mine.html',
				resolve:{      //懒加载   点击那个页面调用哪个页面的代码
					loadPlugin:function($ocLazyLoad){
						return $ocLazyLoad.load([
						{
							files:['css/mine.css']     
						}
							])
					}
				}
			})
				//我的 ==》提现页
				.state('tixian',{
					url:'/tixian',
					templateUrl:'view/tixian.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》充值页
				.state('chongzhi',{
					url:'/chongzhi',
					templateUrl:'view/chongzhi.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》投资页
				.state('touzi',{
					url:'/touzi',
					templateUrl:'view/touzi.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》设置页
				.state('mine_set',{
					url:'/mine_set',
					templateUrl:'view/mine_set.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》账户明细页页
				.state('mine_account',{
					url:'/mine_account',
					templateUrl:'view/mine_account.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》积分商品页页
				.state('mine_shop',{
					url:'/mine_shop',
					templateUrl:'view/mine_shop.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》设置 添加银行卡
				.state('bankcard',{
					url:'/bankcard',
					templateUrl:'view/bankcard.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})
				//我的 ==》设置 关于我们
				.state('about',{
					url:'/about',
					templateUrl:'view/about.html',
					resolve:{      //懒加载   点击那个页面调用哪个页面的代码
						loadPlugin:function($ocLazyLoad){
							return $ocLazyLoad.load([
							{
								files:['css/mine.css']     
							}
								])
						}
					}
				})



}

angular.module('myapp')
		.config(config)