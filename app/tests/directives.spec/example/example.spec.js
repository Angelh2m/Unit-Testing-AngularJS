// Test
describe('myNameSpace.directives', function() {
    var element, scope;
  
    beforeEach(module('myNameSpace.directives'));
  
    beforeEach(inject(function($rootScope, $compile) {
      
      element = angular.element('<directive>Old text</directive>');
      scope = $rootScope.$new();
      $compile(element)(scope);
      scope.$digest();
    }));
  
    it('should display the text properly', function() {
      expect(element.html()).toBe('Hello World');
    });

});
