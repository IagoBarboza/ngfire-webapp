angular.module('app.home', [])
	
	.controller('HomeCtrl', ['$scope', 'IOWLToolbar', function ($scope, IOWLToolbar) {
		// TOOLBAR
		IOWLToolbar.enable();
		IOWLToolbar.setTitle('HOME');
		IOWLToolbar.enable('menu-button');

	}])