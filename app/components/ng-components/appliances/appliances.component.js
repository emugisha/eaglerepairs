(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('appliancesController', appliancesController)
        .component('appliances',{
            templateUrl:'components/ng-components/appliances/appliances.html',
            controller : appliancesController,
            bindings:{
                onSelect:'&'
            }
        });

        function appliancesController(){
            var vm = this;
            vm.returnAppliance = returnAppliance;
            vm.allAppliances=['Air Conditioner','Boiler','Central Air Conditioner','Cooktop','Dishwasher','Dryer','Elliptical Machine','Fitness Weight Machine','Freezer',
                                'Furnace','Garage Door Opener','Garbage Disposal','Grill','Heat Pump','Ice Maker Freestanding','Microwave','Double Oven','Oven','Range',
                                'Range Hood','Refrigerator','Riding Mower','Snowblower','Stacked Laundry Unit','Stationary Bike','Stepper','Treadmill','TV','Trash Compactor',
                                'Washer','Water Heater','Wide Deck Mower','Whole House Dehumidifiers and Humidifiers'];
           
             vm.chunks= Math.floor(vm.allAppliances.length/3);
             vm.groupedAppliances = _.chunk(vm.allAppliances, vm.chunks);

             function returnAppliance(applianceName){
                 vm.onSelect({appliance:applianceName});
             }
        }

}())