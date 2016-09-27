'use strict';

var as = angular.module('haiApp.browser.controllers');
  
as.service('BrowserService', ['$http', function ($http) {
    this.query = function (path) {
    	return $http.get('api/ftp.php?path=' + path);      
    };
}]);
