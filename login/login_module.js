(function () {

    var as = angular.module('haiApp.login', ['ngRoute', 'haiApp.login.controllers']);
	
    as.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
            $routeProvider.when('/login',
                                {controller: 'LoginController',
                                    templateUrl: 'login/login.html'});

        }]);

}());