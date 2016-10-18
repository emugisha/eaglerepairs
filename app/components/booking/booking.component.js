(function(){

    'use strict'

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('bookingController', bookingController)
        .component('booking',{
            templateUrl:'components/booking/booking.html',
            controller : bookingController
        });

        function bookingController(_){
            var vm = this;
            vm.step = 1;
            console.log("inside the component");


            vm.allAppliances=['Air Conditioner','Boiler','Central Air Conditioner','Cooktop','Dishwasher','Dryer','Elliptical Machine','Fitness Weight Machine','Freezer',
                                'Furnace','Garage Door Opener','Garbage Disposal','Grill','Heat Pump','Ice Maker Freestanding','Microwave','Double Oven','Oven','Range',
                                'Range Hood','Refrigerator','Riding Mower','Snowblower','Stacked Laundry Unit','Stationary Bike','Stepper','Treadmill','TV','Trash Compactor',
                                'Washer','Water Heater','Wide Deck Mower','Whole House Dehumidifiers and Humidifiers'];
          vm.chunks= Math.floor(vm.allAppliances.length/3);
           vm.groupedAppliances = _.chunk(vm.allAppliances, vm.chunks);
        }

})();