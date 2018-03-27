

 var app = angular.module("testApp", []);

 

 app.directive('simpleResult', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        result: '=result'
      },
      template: [
            '<div class="row">',
                	'<h3>{{result.Title}}</h3>',
            '</div>'
      ].join('')
    };
  });


  /** 
  *  SECOND TEST 
  */ 

 var app = angular.module('Ratings', []);

app.directive('rater', function () {
      return {
        restrict: 'E',
        scope: {
          icon: '@',
          max: '=?',
          rating: '=?',
          readOnly: '@',
          functionOnSelect: '@'
        },
        controller: function ($scope) {
          $scope.max = $scope.max || 5;
          $scope.rating = $scope.rating || Math.round($scope.max)/2;


          // function-on-select
          $scope.runFunction = function (newRating) {
            alert('Adding rating of '  + newRating + ' to server.');
          };
        },
        template: '<ul class="rating">' +
            '<li ng-repeat="item in items" ng-class="item" ng-click="toggle($index)">' +
            '{{icon}}' +
            '</li>' +
            '</ul>',
        link: function (scope, element, attrs) {

          var update = function () {
            scope.items = [];
            for (var i = 0; i < scope.max; i++) {
              scope.items.push({filled: i < scope.rating});
            }
            scope.icon = scope.icon || '★';
            // any properties here will update on click
          };

          scope.toggle = function (index) {
            if (scope.readOnly && scope.readOnly === 'true') {
              return;
            }
            scope.rating = index + 1;
            if (attrs.functionOnSelect) {
              scope.runFunction(scope.rating);
            }
          };

          scope.$watch('rating', function (oldVal, newVal) {
            if (newVal) { update(); }
          });

        }
      };
    });