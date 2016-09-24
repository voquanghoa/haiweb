
(function () {
	
    var as = angular.module('haiApp.main.controllers', []);

    as.controller('MainController', [ '$scope','$http', '$location',
        function ($scope, $http, $location) {
			$location.url('/login');
		}
	]);

}());