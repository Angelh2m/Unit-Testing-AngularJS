

describe('Testing Angular JS', function(){

    beforeEach(module('testingAngularApp')); 

    describe('Testing AngularJS controller', function(){
        // Add the Angular MAIN module to the test
        var scope, ctr;

        beforeEach(
            // Used to inject Angular components to the test 
            inject(function($controller, $rootScope){
                scope = $rootScope.$new();
                ctr = $controller('angularController', {
                    $scope: scope
                });
            })
        );

        it('Should initialize the title in the scope ', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Testing angular app');
        });
     
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
        })

    });

});