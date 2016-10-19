(function(){

    'use strict'

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('bookingController', bookingController)
        .component('booking',{
            templateUrl:'components/booking/booking.html',
            controller : bookingController
        });

        function bookingController(){
            var vm = this;
            vm.step = 1;
            vm.gotoStep2 = gotoStep2;
            vm.gotoStep3 = gotoStep3;
            vm.booking = {};

            function gotoStep2(appliance){
                vm.booking.appliance = appliance;
                vm.step = 2;
            }

            function gotoStep3(booking){
                vm.step = 3;
                console.log(booking);
            }
            
        }

})();