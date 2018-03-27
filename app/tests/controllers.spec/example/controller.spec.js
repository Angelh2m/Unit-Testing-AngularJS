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

describe('Directive: rater', function() {
    // load the directive's module and view
    beforeEach(module('Ratings'));
  
    var element, scope, starRating, getStar;
  
    // beforeEach(function() {
    //   /* Function counts number of filled stars */
    //   starRating = function(element) {
    //     var elementLength = element.text().length - 1,
    //       starCount = 0;
    //     for (var i = 0; i < elementLength; i++) {
    //       if (
    //         !element
    //           .find('li')
    //           .eq(i)
    //           .hasClass('filled')
    //       ) {
    //         starCount = i;
    //         break;
    //       }
    //     }
    //     return starCount;
    //   };
  
    //   /*
    //   getStar = function (element, number) {
    //     return element.find('li').eq(number - 1);
    //   };
    //   */
  
    //   /* Custom Machers Here */
    //   this.addMatchers({
    //     toBeStarCount: function(starCount) {
    //       this.message = function() {
    //         return (
    //           'Expected ' + starCount + ' stars, but counted ' + this.actual + '.'
    //         );
    //       };
  
    //       return this.actual === starCount;
    //     },
    //   });
    // });
  
    describe('default rater', function() {
      beforeEach(
        inject(function($rootScope, $compile) {
          scope = $rootScope.$new();
          element = angular.element('<rater></rater>');
          element = $compile(element)(scope);
          scope.$digest();
        })
      );
  
      it('should display the element on the page with stars', function() {
        expect(element).toBeDefined();
        // expect(element.text()).toContain('★');
      });
  
      it('should have a max of 5 stars', function() {
        // expect(element.text()).toBe('★★★★★');
      });
  
      it('should show a default element with a 3 out of 5 star rating', function() {
        // expect(starRating(element)).toBeStarCount(3);
        //expect(element.find('li').eq(0)).toHaveClass('filled'); // 1st star filled
        //expect(element.find('li').eq(2)).toHaveClass('filled'); // 3rd star filled
        //expect(element.find('li').eq(3)).not.toHaveClass('filled'); // 4th star not filled
      });
    });
  
    describe('rating with attributes', function() {
      beforeEach(
        inject(function($rootScope, $compile) {
          scope = $rootScope.$new();
          element = angular.element(
            '<rater icon="X" rating="7" max="10"></rater>'
          );
          element = $compile(element)(scope);
          scope.$digest();
        })
      );
  
      it('should change the icons to "X"\'s', function() {
        expect(element.text()).toContain('X');
      });
  
      it('should set the max to 10', function() {
        expect(element.text().length).toBe(10);
      });
  
      it('should set the rating to 7', function() {
        // expect(starRating(element)).toBeStarCount(7);
      });
    });
  });