
'use strict';

angular.module('myApp.view1', ['ngRoute', 'infinite-scroll'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http){
    $scope.page = 1;
    $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page="+$scope.page)
        .then(function(response){ $scope.details = response.data; });
    $scope.nextPage = function(){
        $scope.busy = true;
        $scope.page += 1;
        $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page="+$scope.page)
            .then(function(response){ $scope.details = response.data; });
        $scope.busy = false;
    }
});
