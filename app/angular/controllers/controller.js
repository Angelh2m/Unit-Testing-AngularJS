

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

 var app = angular.module('plunker', []);

 app.directive('foo', function() {
   return {
     restrict: 'E',
     controller: function($scope) {
       this.add = function(x, y) {
         return x + y;
       }
     }
   };
 });
 
 app.directive('bar', function() {
   return {
     restrict: 'E',
     require: '^foo',
     link: function(scope, element, attrs, foo) {
       scope.callFoo = function(x, y) {
         scope.sum = foo.add(x, y);
       }
     }
   };
 });