angular.module('iowl', ['ngMaterial'])

/*####################################################  IOWL-TOOLBAR */

// SERVICE
.factory('IOWLToolbar', ['$mdSidenav', function($mdSidenav){

	var titleObj;
	var toolbarEnabled=false;
	var backButtonEnabled=false;
	var menuButtonEnabled=false;
	var backRoute="";
	var titleClickHandler;
	var menuClickHandler;
	
	function title(){
		return titleObj;
	}

	function setTitle(newTitle, clickHandler){
		titleObj = newTitle;
		titleClickHandler = clickHandler;
	}

	function isEnabled(component){
		// TOOLBAR
		if(!component) return toolbarEnabled;
		// BACK BUTTON
		if(component == 'back-button') return backButtonEnabled;
		if(component == 'menu-button') return menuButtonEnabled;
	}

	function enable(component){
		// TOOLBAR
		if(!component) toolbarEnabled = true;
		// BACK BUTTON
		if(component == 'back-button') backButtonEnabled = true;
		if(component == 'menu-button') menuButtonEnabled = true;
	}

	function disable(component){
		// TOOLBAR
		if(!component) toolbarEnabled = false;
		// BACK BUTTON
		if(component == 'back-button') backButtonEnabled = false;
		if(component == 'menu-button') menuButtonEnabled = false;
	}

	function setBackRoute(newBackRoute){
		backRoute = newBackRoute;
	}

	function back(){
		window.location.href="#/"+backRoute;
	}

	function titleClick(param){
		if(titleClickHandler) titleClickHandler(param);
		else console.log("No Handler");
	}

	function setMenuHandler(handler){
		menuClickHandler = handler;
	}

	function menuClick(){
		$mdSidenav("menu").toggle()
	} 

	return {
		title: title,
		setTitle: setTitle,
		isEnabled: isEnabled,
		enable: enable,
		disable: disable,
		setBackRoute: setBackRoute,
		back: back,
		titleClick: titleClick,
		setMenuHandler: setMenuHandler,
		menuClick: menuClick
	}
}])

// DIRECTIVE
.directive('iowlToolbar', ['IOWLToolbar', function (IOWLToolbar) {
	return {
		restrict: 'E',
		scope:{
		},
		compile: function(){
			return function(scope, iElements, iAttrs){
				scope.IOWLToolbar = IOWLToolbar;
			}
		},
		controller: function($scope, $element){},
		templateUrl: 'app_modules/iowl/templates/toolbar.html' 
	};
}])