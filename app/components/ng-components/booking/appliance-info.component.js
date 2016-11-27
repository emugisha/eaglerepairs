(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('applianceController', applianceController)
        .component('applianceInfo',{
            templateUrl:'components/ng-components/booking/appliance-info.html',
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


           function showBrands(appliance){
               vm.viewAppliances = false;
               vm.appliance.applianceName = appliance;
               vm.viewBrands = true;
               
           }

           function addBrand(brand){
               vm.appliance.brand = brand;
               vm.onDone({appliance:vm.appliance});
           }

        }

}());