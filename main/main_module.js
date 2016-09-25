(function () {

    var as = angular.module('haiApp.main', ['ngRoute', 'haiApp.main.controllers']);
	
    as.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
            $routeProvider.when('/home',
                                {controller: 'MainController',
                                    templateUrl: 'main/main.html'});

        }]);

}());