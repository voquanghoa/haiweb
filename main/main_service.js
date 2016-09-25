'use strict';

var as = angular.module('haiApp.main.controllers');
  
as.service('MainService', ['$http', function ($http) {
    this.addPost = function (post) {
    	return $http.post('api/post.php', post);      
    };
}]);
