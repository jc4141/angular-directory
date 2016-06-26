var actorControllers = angular.module('actorControllers', []);

actorControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	//Will no longer work in Chrome locally because it's a 
	//cross-origin request.
	$http.get('js/data.json').success(function(data){
		$scope.actors = data;
		$scope.actorOrder = 'name';
	});
}]);

actorControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data){
		$scope.actors = data;
		$scope.whichItem = $routeParams.itemId;  //itemId is defined in the $routeProvider.

		//Create nextItem and prevItem for Details page.
		if($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId) - 1; //Need to cast it to Number.
		}
		else {
			$scope.prevItem = $scope.actors.length - 1;
		}

		if($routeParams.itemId < $scope.actors.length - 1){
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}
		else {
			$scope.nextItem = 0;
		}
	});
}]);
