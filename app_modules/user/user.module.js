angular.module('app.user', [])
	
	.factory('User', ['$firebaseObject', '$firebaseArray', function ($firebaseObject, $firebaseArray) {

		// USER OBJ
		function user(id){
			return $firebaseObject(firebase.database().ref('/users/'+id));
		}

		// USERS ARRAY
		function users(n){
			var usersArray;

			if(!n) usersArray = $firebaseArray(firebase.database().ref('/users'));
			if(n) usersArray = $firebaseArray(firebase.database().ref('/users').limitToFirst(n));
			return usersArray;
		}

		// LOGIN
		function login(email, password, success, error){
			// REQUEST
			firebase.auth().signInWithEmailAndPassword(email, password)
			// SUCCESS 	
			.then(function(response){
				localStorage.uid = response.uid;
				success(response);
			})
			// ERROR
			.catch(function(e){
				error(e);
			})
		}

		// LOGOUT
		function logout(success, error){
			// REQUEST
			firebase.auth().signOut().then(
				// SUCCESS
				function(response){
					if(success) success(response);
				},
				// ERROR
				function(e){
					if(error) error(e);
				}
			);
		}

		// CREATE USER
		function create(newUser, success, error){
			
			
			firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(
				
				// SUCCESS
				function(response){
					firebase.database().ref("users/"+response.uid).set(newUser);
					success();
				},

				// ERROR
				function(e){
					error(e);
				}
			);
		}

		// INTERFACE
		return {
			user: user,
			users: users,
			login: login,
			logout: logout,
			create: create
		};

	}])

	.controller('UserLoginCtrl', ['$scope', 'User', 'IOWLToolbar', function ($scope, User, IOWLToolbar) {
		// TOOLBAR
		IOWLToolbar.disable();

		$scope.login = function(){
			User.login($scope.email, $scope.password, 
			// SUCCESS
			function(response){
				alert("Login efetuado com sucesso");
				window.location.href = '#/home';
			},
			// ERROR
			function(error){
				alert(error.message);
			});		
		}
	}])