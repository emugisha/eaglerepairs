(function(){
    'use strict';
    angular
        .module('eagleRepairsApp.components.booking')
        .controller('bookingController', bookingController)
        .component('booking',{
            templateUrl:'components/ng-components/booking/booking.html',
            controller : bookingController
        });

        function bookingController(){
            var vm = this;
            vm.step = 4;
            vm.gotoStep2 = gotoStep2;
            vm.gotoStep3 = gotoStep3;
            vm.gotoStep4 = gotoStep4;
            vm.booking = {};

            function gotoStep2(appliance){
                vm.booking.appliance = appliance;
                vm.step = 2;
            }

            function gotoStep3(booking){
                vm.step = 3;
                vm.booking = booking;
            }

            function gotoStep4(booking){
                vm.booking = booking;
                vm.step = 4;
            }
            
        }

})();