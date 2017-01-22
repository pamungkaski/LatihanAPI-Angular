
'use strict';

angular.module('myApp.view1', ['ngRoute'])

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
    $scope.pagePlus = function(){
        $scope.page += 1;
        $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page="+$scope.page)
            .then(function(response){ $scope.details = response.data; });
        $scope.clicked = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
    };
    $scope.pageMinus = function() {
        if ($scope.page > 1) {
            $scope.page -= 1;
            $http.get("http://api.themoviedb.org/3/discover/movie?api_key=b83e15027df50325aa48d0cdc5c9bf30&&page=" + $scope.page)
                .then(function (response) {
                    $scope.details = response.data;
                });
            $scope.clicked = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,];
        }
    };
    $scope.clicked = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
    $scope.click = function(index){
        if($scope.clicked[index]){
            $scope.clicked[index]= false;
        }else {
            $scope.clicked[index] = true;
        }
    };
});
