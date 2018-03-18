var app = angular.module('testingAngularApp', []);

app.controller('angularController', function( $scope) {
    $scope.title = "Testing angular app";

    $scope.destinations = [];
    $scope.newDestination = {
        city: '',
        country: '',
    }
    $scope.addDestination = function(){

        $scope.destinations.push($scope.newDestination);
        console.log($scope.destinations);
        $scope.newDestination = {};
    }
})