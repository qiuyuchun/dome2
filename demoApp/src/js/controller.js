angular.module('myapp')
			.controller('main',main)
			//.controller('login',login)

			
function main ($scope,$location) {

	document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
	// console.log($scope);
	// console.log($location);
	//点击按钮是跳转到index页面
	/*$scope.subTo = function () {
		//console.log($scope);
		$scope.user = document.getElementsByTagName("input")[0].value;
			console.log($scope.user)
		$location.path("/index/one")   //显示第一页；
	}*/
}

//login页面跳转
function login($scope,$location){
	console.log($scope)
		
	$scope.postData=function(){
		$location.path("/index")
	}
}
