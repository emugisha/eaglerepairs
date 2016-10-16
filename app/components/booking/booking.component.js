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
            console.log("inside the component");
        }

})();