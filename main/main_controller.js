
(function () {
	
    var as = angular.module('haiApp.main.controllers', []);

    as.controller('MainController', [ '$scope', '$rootScope', 'MainService', '$q', '$http', '$location',
        function ($scope, $rootScope,MainService, $q, $http, $location) {
			if(!$rootScope.authenticated()){
				$location.url('/login');
			}
			$scope.message = '';
			$scope.messageClass="alert-success";
			$scope.showUpload = false;
			$scope.post = {
				title: "",
				url: ""
			};
			
			$scope.showUrlInput = function(){
				$scope.showUpload = false;
			};
			
			$scope.showUploadFile= function(){
				$scope.showUpload = true;
			}
			
			$scope.submit = function(){
				$q.all([
					MainService.addPost($scope.post)
				])
				.then(function (response) {
					$scope.message = 'Đã thêm bài viết thành công.';
					$scope.messageClass="alert-success";
					$scope.post = {
						title: "",
						url: ""
					};
				}, function(data){
					$scope.message = 'Có lỗi khi thêm bài viết.' + data;
					$scope.messageClass="alert-warning";
				});
			};
		}
	]);

}());