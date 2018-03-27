var app = angular.module("testingAngularApp", []);

/** 
*  Another way to define the scope with this. 
*/ 

app.controller("angularThis", function() {
    var self = this;
    self.myTitle = ' Title using this';
});

/** 
*   We are testing the controller now
*/ 

app.controller('MainController', function($scope) {
    $scope.welcomeMessage = 'Welcome to the pizza store!';
    $scope.choices = ['canadian', 'vegetarian', 'pepperoni'];
    $scope.pizzaType = '';
    $scope.oderInProgress = false;

    $scope.placeOrder = function(){
        if($scope.pizzaType !== ''){
            $scope.orderInProgress = true;
        }
    }
})


/** 
*  This is the rest of the application excersice 
*/ 

app.directive('destinationDirective', function(){
    return{
        scope: {
            destination: '=',
            apikey: '=',
            onRemove: '@',
        },
        template: "'<span>{{destination.city}}</span>'" + "'<span>{{destination.country}}</span>'" + "<span ng-click='onRemove()'>Remove </span>" + '<button ng-click="getWeather(\'newyork\')">Get Weather</button>',
        controller: function($http, $rootScope, $scope){
            console.log('loaded');
            $scope.getWeather = function(city) {
                console.log('works');
                $http.get("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22")
                  .then(
                    function(success) {
                      console.log(success);
                      $scope.city = success.data.weather[0].description;
                      $scope.temp = success.data.main.temp;
                    },
                    function(error) {
                      console.log(error);
                    }
                  );
              };

        }
    }
});

app.filter('warmestDestinations', function(){
    return function (destinations, minimunTemp){

        var warmDestinations = [];

        angular.forEach(destinations, function(destination){
            if(destination.temp >= minimunTemp){
                warmDestinations.push(destination)
            }
        });

        return warmDestinations;
    }
});

app.controller("angularController", function($scope, $http) {
  $scope.title = "Testing angular app";
  $scope.apiKey = "b6907d289e10d714a6e88b30761fae22";

  $scope.destinations = [];
  $scope.newDestination = {
    city: "",
    country: "",
    temp: 0,
  };

  $scope.addDestination = function() {
    $scope.destinations.push($scope.newDestination);
    console.log($scope.destinations);
    $scope.newDestination = {};
  };



});


/** 
*  Testing new directive 
*/ 


angular.module('testingAngularApp').directive('greetingDirective',
    function(){
        return{
             scope: {
                 fn:'@',
                 ln:'@'
            },
             restrict:'E',
            //  templateUrl:'directive.html',
            template: "<h3>Directive</h3>" +
            "<p>{{greetingController.name}}</p>"+
            "<span> {{lastname}} </span>"+
            "<div>{{greetingController.greeting}}</div>",
             controller:'greetingController',
             controllerAs:'greetingController',
             bindToController:true
        };
    }
);
// $attrs
angular.module('testingAngularApp').controller('greetingController',
    function($scope){
        $scope.lastname = "LastNameHere"
        this.name = "New Directive";
        this.greeting = 'Hello, ' +  this.fn + ' ' + this.ln;
    }
);




/** 
*  Directive Test 
*/ 

// Simple AngularJS directive


app.directive('directive', function() {
  var directive = {};
  directive.restrict = 'E'; // Indicates an element directive.
  directive.template = 'Hello World';

  return directive;
});
