angular.module('app', ['ngRoute', 'ngMaterial', 'firebase', 'iowl', 'app.menu', 'app.user', 'app.home'])

	.config(['$routeProvider', '$mdAriaProvider', '$mdThemingProvider', function ($routeProvider, $mdAriaProvider, $mdThemingProvider) {
		
		// DISABLE ARIA WARNINGS
		$mdAriaProvider.disableWarnings();

		// ROUTES
		$routeProvider

		.when('/login', {
			templateUrl: 'app_modules/user/templates/login.html',
			controller: 'UserLoginCtrl'
		})

		.when('/home', {
			templateUrl: 'app_modules/home/templates/home.html',
			controller: 'HomeCtrl'
		})
		
		// THEME
		// $mdThemingProvider.theme('default')
	 //    .primaryPalette('light-green', {
	 //      'default': '800'
	 //    });

	 //    // BROWSER COLOR
	 //    $mdThemingProvider.enableBrowserColor({
	 //    	theme: 'default'
	 //    });

	}])