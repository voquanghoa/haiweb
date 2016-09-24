//Define a function scope, variables used inside it will NOT be globally visible.
(function () {

    var as = angular.module('haiAppMain', [ 'haiApp.services', 'haiApp.controllers']);



    as.run(function ($rootScope, $http, $route, $location) {
    	var routesOpenToPublic = [];
        angular.forEach($route.routes, function (route, path) {
            // push route onto routesOpenToPublic if it has a truthy publicAccess value
            route.publicAccess && (routesOpenToPublic.push(path));
        });

        $rootScope.$on('$routeChangeStart', function (event, nextLoc, currentLoc) {
            
        });
    });
}());