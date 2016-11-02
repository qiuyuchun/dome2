//directive指令是自定义的指令

angular.module('myapp')
		//.directive('createDom',createDom)  
		//.directive('pageTitle',pageTitle)
		.directive('indexOne',indexOne)
		.directive('licaiS',licaiS)
		.directive('shenghuoS',shenghuoS)
		.directive('mineS',mineS)
		.directive('licaikepuS',licaikepuS)
		.directive('shczS',shczS)
		.directive('shgameS',shgameS)
		.directive('tixianS',tixianS)
		.directive('chongzhiS',chongzhiS)
		.directive('touziS',touziS)
		.directive('maccountS',maccountS)
		.directive('msetS',msetS)
		.directive('mshopS',mshopS)
		.directive('bankcardS',bankcardS)
		.directive('aboutS',aboutS)
//indexOne
function indexOne($rootScope){
	//console.log($rootScope)
		return {
			link: function(scope,element){
				var mainScroll=new IScroll('#main',{
					click:true
				});
				var swiper=new Swiper('.swiper-container',{
					pagination:'.pagination',
					autoplay:3000,
					loop:true
				})
				$.ajax({
					url:'http://localhost:3001/first?callback=?',
					dataType:'jsonp',
					success:function(e){
						console.log(e);
						var con = "";
						for(i in e){
						console.log(e[i].id);
							con+="<div class='con'><h2>"+e[i].title+"<span>"+e[i].top+"</span></h2><ul><li><b class='red'>"+e[i].num+"</b><br>"+e[i].name+"</li><li><em>"+e[i].time+"</em><br>"+e[i].state+"</li><span>"+e[i].btn+"</span></ul><p>"+e[i].info+"</p></div>"
						}
						$('.scroller').append(con);
						mainScroll.refresh();
					}
				})


			}
		}
}
//licaiS
function licaiS($rootScope){
	return {
		
		link : function(scope,element){

			setTimeout(function(){
					var smallScroll=new IScroll('#small','#big',{
						click:true
					})

					$.ajax({
						url:'http://localhost:3001/first?callback=?',
						dataType:'jsonp',
						success:function(e){
							console.log(e);
							var con = "";
							for(i in e){
							console.log(e[i].id);
								con+="<div class='con'><h2>"+e[i].title+"<span>"+e[i].top+"</span></h2><ul><li><b class='red'>"+e[i].num+"</b><br>"+e[i].name+"</li><li><em>"+e[i].time+"</em><br>"+e[i].state+"</li><span>"+e[i].btn+"</span></ul><p>"+e[i].info+"</p></div>"
							}
							$('.scroller').prepend(con);
								smallScroll.refresh();
						}
					})

					var bigScroll=new IScroll('#big',{
						click:true
					})
					var kepuScroll=new IScroll('#kepu',{
						click:true
					})
					$('#nav_licai').on('click','a',function(e){
							e.preventDefault();
						}).on('tap','a',function(){
							var index=$(this).index();
							$('.line').css('left',index*33.33+"%");
							var id=$(this).attr('href');
							$(id).css('display','block').siblings().css('display','none');
							bigScroll.refresh();
							kepuScroll.refresh();
					})
				},100)
		}
	}
}
	//licaikepuS
function licaikepuS($rootScope){
	return {
		link : function(scope,element){
			var mainScroll=new IScroll('#main',{
					click:true
				});
		}
	}
}
//shenghuoS
function shenghuoS($rootScope){
	return {
		link : function(scope,element){
			setime();
			//图片轮播  继承首页图片轮播的样式和js
			var swiper=new Swiper('.swiper-container',{
				pagination:'.pagination',
				autoplay:3000,
				loop:true
			});
		}
	}
}
	//shczS  生活--手机充值页
	function shczS(){
		return {
			link:function(scope,element){
				setTimeout(function(){
					var mainScroll=new IScroll('#main',{
					click:true
				},100)
			
				});
				$('.liuliang').hide();
				$('.chongzhi_nav').find('span').eq(0).css({'borderBottomColor':'red'});
				$('.chongzhi_nav').on('tap','span',function(){
					var idx=$(this).index();
					//$(this).addClass;
					$(this).css({'borderBottomColor':'red'}).siblings().css({'borderBottomColor':'#ccc'});
					$('.chongzhi_con>ul').eq(idx).show().siblings().hide();
				})
			}
		}
	}
	//shgameS 生活--游戏充值页
	function shgameS(){
		return {
			link:function(scope,element){
				var mainScroll=new IScroll('#main',{
					click:true
				})
				// 图片轮播
				var swiper=new Swiper('.swiper-container',{
					pagination:'.pagination',
					autoplay:3000,
					loop:true
				})
			}
		}
	}



//mineS
function mineS($rootScope){
	return {
		
		link : function(scope,element){
			setTimeout(function(){
					new IScroll('#main',{
						click:true
					})
				},100)

		}
	}
}
	//我的--》提现页
		function tixianS($rootScope){
			return {
				
				link : function(scope,element){
					new IScroll('#main',{
						click:true
					});
				}
			}
		}

	//我的--》充值页
		function chongzhiS($rootScope){
			return {
				
				link : function(scope,element){
					new IScroll('#main',{
						click:true
					});
				}
			}
		}

	//我的--》投资页
	function touziS($rootScope){
			return {
				
				link : function(scope,element){
					new IScroll('#main',{
						click:true
					});
				}
			}
		}

	//我的--》设置页
	function  msetS($rootScope){
		return {
			link:function(scope,element){
				var mainScroll=new IScroll('#main',{
					click:true
				});
			}
		}
	}
	//我的--》账户明细页
	function  maccountS($rootScope){
		return {
			link:function(scope,element){
				var mainScroll=new IScroll('#main',{
					click:true
				});
			}
		}
	}
	//我的--》积分商品页
	function  mshopS($rootScope){
		return {
			link:function(scope,element){
				setTimeout(function(){
					var mainScroll=new IScroll('#main',{
					click:true
				});
				$.ajax({
					url:'http://localhost:3001/mineshop?callback=?',
					dataType:'jsonp',
					success:function(e){
						var dl ="";
						for(i in e){
							console.log(e[i].id);
							dl+="<dl><dt><img src='../img/"+e[i].img+"'></dt><dd><h2>"+e[i].img_name+"</h2><p>Cost <b class='red'>"+e[i].num+"</b>分</p></dd></dl>"
						}
						$('.shop_list').append(dl)
						mainScroll.refresh();
					}
				})
				},100)
			}
		}
	}

	//我的--》设置   添加银行卡
	function  bankcardS($rootScope){
		return {
			link:function(scope,element){

				var mainScroll=new IScroll('#main',{
					click:true
				});
			}
		}
	}
	//我的--》设置   关于我们
	function  aboutS($rootScope){
		return {
			link:function(scope,element){
				setime();
			}
		}
	}


	function setime(){

		setTimeout(function(){
					new IScroll('#main',{
						click:true
					})
				},100)

	}




// // 页面的头部
// function pageTitle($rootScope){
// 	return {
// 		restrict:'A',   //限定指令
// 		link:function(scope,element){
// 			//console.log(element)
// 			   $rootScope.$on('$stateChangeStart',function(event,toState){
// 			   	var tit='后台管理系统-----'
// 			   	//console.log(toState.data)
// 			   	if(toState.data && toState.data.title){
// 			   		tit += toState.data.title;
// 			   	}
// 			  //console.log(tit)
// 			   	element.text(tit);
// 			   })
// 			   $rootScope.$on('$stateChangeSuccess',function(event){
// 			   		//console.log(event)
// 			   })
// 		}
// 	}
// }

// function createDom(){

// 	//A 对应的是自定义属性的形式调用
// 	//C 对应的是class调用
// 	//E 对应的是自定义元素调用

// 	return {
// 		restrict:"C",   //限定我们的指令是怎么调用的
// 		link : function(scope,element){  //link      逻辑

// 			var str="";
// 			console.log(scope.data)
// 			 scope.data.forEach(function(v){
// 				str += '<span>'+v.name+'</span>';
// 			})
// 			//console.log(str)
// 			/*element.find('button').on('click',function(){
// 				$scope.data = 111;

// 			})*/
// 			/*$scope.$watch('data',function(nv,ov){
// 				console.log(JSON.stringify(nv)+JSON.stringify(ov))
// 			})*/
// 			element.append(str)
// 		}
// 	}
// }

