// Simple AngularJS directive
var directives = angular.module('myNameSpace.directives', []);

directives.directive('directive', function() {
  var directive = {};

  directive.restrict = 'E'; // Indicates an element directive.
  directive.template = 'Hello World';

  return directive;
});