

describe('Controllers', function(){ //describe your object type
    beforeEach(module('testingAngularApp')); //load module<br />
    describe('myctrl',function(){ //describe your app name<br />
        var myctrl;
        beforeEach(inject(function($controller){ //instantiate controller using $controller service
            myctrl = $controller('angularThis');
        }));
        it('Mode should be fun', function(){  //write tests
            expect(myctrl.myTitle).toBeDefined();
            
        });
    });
});


describe('Select pizza controller', function(){
    var scope;
    var ctrl;

    beforeEach(module('testingAngularApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope,
        });
    }));

    describe('$scope.placeholder', function(){
        it("Let's the user place and order whne they selected a pizza type", function() {
            scope.pizzaType = scope.choices[0];
            scope.placeOrder();
            expect(scope.orderInProgress).toBe(true);
        });
    });

});

/** 
*  Application test 
*/ 

describe('Testing Angular JS', function(){

    beforeEach(module('testingAngularApp')); 
    
    /** 
    *  CONTROLLER TEST 
    */ 

    describe('Testing AngularJS controller', function(){
        // Add the Angular MAIN module to the test
        var scope, ctr;

        beforeEach(
            // Used to inject Angular components to the test 
            inject(function($controller, $rootScope, $httpBackend){
                scope = $rootScope.$new();
                ctr = $controller('angularController', {
                    $scope: scope
                });
                httpBackend = $httpBackend;
            })
        );

        /** 
        *  SCOPE TEST 
        */ 


        it('Should initialize the title in the scope ', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Testing angular app');
        });
     
        /** 
        *  ARRAY AND HTTP TEST 
        */ 

        it('Should add 2 destinations to the destination test', function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city: "London",
                country: "England"
            };

            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
        });
    });

    /** 
    *  FILTER TEST 
    */ 

    describe('Testing Angualr Filter', function() {
      it('Should return only warm destinations', inject(function ($filter){
            var warmest = $filter('warmestDestinations');

            var destinations = [
                {   city: "Beijin",
                    country: "China",
                    temp: 10
                },
                {   city: "Moscow",
                    country: "Russia",
                    temp: -5
                },
                {   city: "Mexico city",
                    country: "Mexico",
                    temp: 20
                },
            ];

            expect(destinations.length).toBe(3);

            var warmestDestinations = warmest(destinations, 10);
            expect(warmestDestinations.length).toBe(2);
            expect(warmestDestinations[0].city).toBe("Beijin");
      }));
    });

    /** 
    *  Testing Directive 
    */ 

    describe('Testing AngularJS Directive', function() {
        var scope;

        beforeEach(inject(function($compile, $rootScope){
            scope = $rootScope.$new();
            scope.destination = {
                city: "Tokyo",
                country: "Japan"
            }

            scope.apiKey ="xyz";

            var element = angular.element(
                '<div destination-directive destination="destination" api-key="apiKey" on-remove="remove()">'
            );
            template = $compile(element)(scope);
            scope.$digest();
        }));

    })
    

});