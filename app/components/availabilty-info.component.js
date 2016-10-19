(function(){
    'use strict'

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('availabilityController', userController)
        .component('avilability',{
            templateUrl:'components/booking/availability.html',
            controller : availabilityController,
            bindings:{
                booking:'<',
                onDone:'&'
            }
        });

        function availabilityController(){
            var vm = this;
            
        }

}());