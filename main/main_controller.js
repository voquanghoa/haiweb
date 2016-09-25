
(function () {
	
    var as = angular.module('haiApp.main.controllers', []);

    as.controller('MainController', [ '$scope', '$rootScope', '$http', '$location',
        function ($scope, $rootScope, $http, $location) {
			if(!$rootScope.authenticated()){
				$location.url('/login');
			}
		}
	]);

}());