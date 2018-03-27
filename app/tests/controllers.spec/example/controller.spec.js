describe('Simple Result Directive', function() {
  
    beforeEach(module('testApp')); //loading Testing module

    var result = {
      Title: 'Testing what is here'
    };

    var expectedHtml = [
      '<div class="col-sm-4">',
            '<h3 class="ng-binding">Testing what is here</h3>',
      '</div>'
    ].join('')

    var $compile;
    var $rootScope;

    // beforeEach(module('testApp')); //loading Testing module

    beforeEach(inject(function(_$compile_, _$rootScope_) { //$compie and $rootScope services
    	$compile = _$compile_;
    	$rootScope = _$rootScope_;
    }));
 
  it('should output result to expected HTML format', function() {
    $rootScope.result = result;
    var element = $compile('<simple-result result="result"></simple-result>')($rootScope);
    $rootScope.$digest(); //For executing digest life cycle for angular
    console.log(element.html())
    expect(element.html()).toBeDefined();
  });

});


/** 
*  Second Test 
*/ 

describe('Testing directives', function() {
    var $scope, $compile;
  
    beforeEach(function() {
      module('plunker');
      
      inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        $compile = _$compile_;
      });
      
    });
    
    it('ensures callFoo does whatever it is supposed to', function() {
      
      // Arrange
      
      var fooCtrl = {
        add: function() { return 123; }
      };
      
      spyOn(fooCtrl, 'add').andCallThrough();
      
      var element = angular.element('<div><bar></bar></div>');
      element.data('$fooController', fooCtrl);
      
      $compile(element)($scope);
    
      var barScope = element.find('bar').scope();
  
      // Act
      
      barScope.callFoo(1, 2);
      
      // Assert
      
      expect(barScope.sum).toBe(123);
      expect(fooCtrl.add).toHaveBeenCalled();
    });
  });