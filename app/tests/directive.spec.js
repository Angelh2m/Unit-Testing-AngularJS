describe('greetingController', function() {
    var ctrl, scope, compiled;

    beforeEach(module('testingAngularApp'));
    beforeEach(inject(function($rootScope, $compile, $controller) {
        element = angular.element(
          '<greeting-directive></greeting-directive>'
        );
        scope = $rootScope.$new();

        compiled = $compile(element)(scope);
        
        scope.$digest();
        
        var data = {
            fn:'Joe',
            ln:'Smith'
        };

        ctrl = $controller('greetingController', {
            $scope: $rootScope
        }, data);

      }));

    it('should create greeting', function() {
        expect(ctrl.greeting).toContain('Hello');
    });
    // dump(scope.lastname);
    it('Shoud say', function() {
        console.log(compiled.html())
        expect(compiled.html()).toContain('<p class="ng-binding">New Directive</p>');
    });
});


/** 
*  TEST 
*/ 

describe('myNameSpace.directives', function() {
    var element, scope;
  
    beforeEach(module('testingAngularApp'));
  
    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element(
        '<directive>Old text</directive>'
      );
  
      scope = $rootScope.$new();
      $compile(element)(scope);
      scope.$digest();
    }));
  
    it('should display the text properly', function() {
      expect(element.html()).toBe('Hello World');
    });
  });


  /** 
  *  Test 2 
  */ 

//  describe('testingAngularApp', function() {
//   var element, scope;

//   beforeEach(module('greetingDirective'));

//   beforeEach(inject(function($rootScope, $compile) {
//     element = angular.element(
//       '<greeting-directive></greeting-directive>'
//     );

//     scope = $rootScope.$new();
//     $compile(element)(scope);
//     scope.$digest();

//     ctrl = $controller();
//   }));

//   it('should display the text properly', function() {
//     console.log(ctrl.name);
//     expect(element.html()).toBe('Hello World');
//   });
// });