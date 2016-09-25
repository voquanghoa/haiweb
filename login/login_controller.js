
(function () {
	
    var as = angular.module('haiApp.login.controllers', []);

	as.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        httpHeaders = $httpProvider.defaults.headers;
    }]);
	
	as.run(function ($rootScope, $http, $route, $location) {
		
		$rootScope.$on('event:loginConfirmed', function () {
            $location.path('/home');
        });
		
		$rootScope.authenticated = function () {
			return localStorage.getItem("authenticated");
		};
		
		$rootScope.name = function () {
			return localStorage.getItem("name");;
		};
		
		$rootScope.password = function () {
			return localStorage.getItem("password");;
		};
		
		$rootScope.$on('event:loginRequired', function () {
			$location.path('/login');
		});
	
		$rootScope.$on('event:logoutRequest', function () {
			delete localStorage.name;
			delete localStorage.password;
			delete localStorage.authenticated;
			delete httpHeaders.common['Authorization'];
		});
		
		$rootScope.$on('event:loginRequest', function (event, username, password) {
            httpHeaders.common['Authorization'] = 'Basic ' + btoa(username + ':' + password);
            console.log('httpHeaders.common[\'Authorization\']@' + httpHeaders.common['Authorization'] + ':::' + username + ':' + password);
            $http.get('api/authentication.php')
                    .success(function (data) {
                     	localStorage.setItem("authenticated", true);
                    	localStorage.setItem("name", username);
                    	localStorage.setItem("password", password);
                    
                        $rootScope.$broadcast('event:loginConfirmed');
                    })
                    .error(function (data) {
                        console.log('login failed...@' + data);
                    });
        });
	});
	
	as.controller('LogoutController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    	$scope.logout = function () {
            $scope.username = $scope.password = null;
            $scope.$emit('event:logoutRequest');
            $location.url('/login');
        };
    }]);
	
    as.controller('LoginController', ['$scope', '$q', 
        function ($scope, $q) {
			
			$scope.username = "";
			$scope.password = "";
			$scope.message = "";
			
			$scope.submit = function(){
				$scope.$emit('event:loginRequest', $scope.username, $scope.password);   
			};
		}
	]);

}());