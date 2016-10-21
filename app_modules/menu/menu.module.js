angular.module('app.menu', [])
	.controller('MenuCtrl', ['$scope', '$mdSidenav', 'User', function ($scope, $mdSidenav, User) {
		
		$scope.changeRoute = function(route){
			window.location.href="#/"+route;
			$mdSidenav("menu").toggle();	
		}

		$scope.exitButtonClick = function(){
			User.logout();
			localStorage.removeItem('uid');
			window.location.href = "#/login";
			$mdSidenav("menu").toggle();
		}
		
	}]);