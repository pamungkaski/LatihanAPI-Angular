
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
    $scope.details = [];
    $scope.info = [];
    $scope.busy = false;
    $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page="+$scope.page)
        .then(function(response){ $scope.details.push(response.data); });
    $scope.nextPage = function(){
        if ($scope.busy) return;
        $scope.busy = true;
        $scope.page += 1;
        $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page="+$scope.page)
            .then(function(response){ $scope.details.push(response.data);
                $scope.busy = false; });
    };
    $scope.showMoreInfo = function(index){
        $scope.info[index] = !$scope.info[index];
    }
    $scope.noIndex = function(index, noPage){
        return ((noPage-1)*20) + index;
    }
});
