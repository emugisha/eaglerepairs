(function(){
    'use strict'

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('applianceController', applianceController)
        .component('applianceInfo',{
            templateUrl:'components/booking/appliance-info.html',
            controller : applianceController,
            bindings:{
                onDone:'&'
            }
        });

        function applianceController(_){
            var vm = this;
            vm.viewAppliances = true;
            vm.showBrands = showBrands;
            vm.appliance = {};
            vm.addBrand = addBrand;
           


            vm.allAppliances=['Air Conditioner','Boiler','Central Air Conditioner','Cooktop','Dishwasher','Dryer','Elliptical Machine','Fitness Weight Machine','Freezer',
                                'Furnace','Garage Door Opener','Garbage Disposal','Grill','Heat Pump','Ice Maker Freestanding','Microwave','Double Oven','Oven','Range',
                                'Range Hood','Refrigerator','Riding Mower','Snowblower','Stacked Laundry Unit','Stationary Bike','Stepper','Treadmill','TV','Trash Compactor',
                                'Washer','Water Heater','Wide Deck Mower','Whole House Dehumidifiers and Humidifiers'];
            
            vm.allBrands = ['Admiral','Amana','Coldspot','Estate','Frigidaire','GE','GE Profile','Gibson','Hotpoint','Kenmore',
                            'Kenmore Elite','KitchenAid','LG','Maytag','Roper','Samsung','Westinghouse','Whirlpool'];
          
          vm.chunks= Math.floor(vm.allAppliances.length/3);
          vm.groupedAppliances = _.chunk(vm.allAppliances, vm.chunks);
          vm.groupedBrands = _.chunk(vm.allBrands, Math.floor(vm.allBrands.length/3));

           function showBrands(appliance){
               vm.appliance.name = appliance;
               vm.viewBrands = true; 
               vm.viewAppliances = false;     
           }

           function addBrand(brand){
               vm.appliance.brand = brand;
               vm.onDone({appliance:vm.appliance});
           }

        }

}());