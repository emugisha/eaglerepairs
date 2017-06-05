(function(){
    'use strict';
    angular
        .module('eagleRepairsApp.components.booking')
        .controller('bookingController', bookingController)
        .component('booking',{
            templateUrl:'components/ng-components/booking/booking.html',
            controller : bookingController,
            bindings:{
                onClose:'&'
            }
        });

        function bookingController(){
            var vm = this;
            vm.step = 1;
            vm.gotoStep1 = gotoStep1;
            vm.gotoStep2 = gotoStep2;
            vm.gotoStep3 = gotoStep3;
            vm.gotoStep4 = gotoStep4;
            vm.booking = {};
            vm.closeModal = closeModal;

            function gotoStep2(booking){
                vm.booking = booking;
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

            function gotoStep1(boooking){
                vm.step = 1;
            }
            function closeModal(){
                vm.onClose();
            }
        }

}());
