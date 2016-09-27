var submitFile = function(selected){
	if(!selected.startsWith('/')){
		selected = '/' + selected;
	}
	$('#form_url').val(selected);
	$("#select-ftp").modal("hide");
};

(function () {
	
    var as = angular.module('haiApp.browser.controllers', []);

    as.controller('BrowserController', [ '$scope', '$rootScope', 'BrowserService', '$q', '$http', '$location',
        function ($scope, $rootScope, BrowserService, $q, $http, $location) {
			$scope.selectedIndex = -1;
			$scope.currentPath = "";
			$scope.items = [];
			$scope.cache = [];
			
			$scope.onItemSelected = function(index){
				var item = $scope.items[index];
				if(item.file){
					$scope.selectedIndex = index;
				}else{
					loadDir($scope, $q, BrowserService,combine($scope.currentPath, item.name));
				}
			};
			
			$scope.refresh = function(){
				loadDir($scope, $q, BrowserService,$scope.currentPath, false);
			}
			
			$scope.goUp = function(){
				var tokens = $scope.currentPath.split('/');
				tokens.splice(-1, 1);
				var newPath = tokens.join('/');
				if(newPath != $scope.currentPath){
					loadDir($scope, $q, BrowserService,newPath, true);
				}
			}
			
			$scope.selectFile = function(){
				if($scope.selectedIndex>=0){
					var item = $scope.items[$scope.selectedIndex];
					var selected = combine($scope.currentPath, item.name);
					submitFile(selected);
				}
			}
			
			loadDir($scope, $q, BrowserService,$scope.currentPath, true);
		}
	]);

	function combine(parent, child){
		if(parent.endsWith('/')){
			return parent + child;
		}else{
			return parent + '/' + child;
		}
	}
	
	function loadDir($scope, $q, BrowserService, path, cache){
		if(!path.startsWith('/')){
			path = '/' + path;
		}
		if(cache && $scope.cache[path] !== undefined){
			$scope.items = $scope.cache[path];
			$scope.currentPath = path;
			$scope.selectedIndex = -1;
		}else {
			$scope.isLoading = true;
			$scope.selectedIndex = -1;
			$q.all([
                BrowserService.query(path)
            ])
			.then(function (response) {
				$scope.isLoading = false;
				var data = response[0].data;
				$scope.items = data.items;
				$scope.cache[data.path] = data.items;
				$scope.currentPath = data.path;
			}, function(err){
				$scope.isLoading = false;
			});
		}
	}
}());