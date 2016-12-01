(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('applianceController', applianceController)
        .component('applianceInfo',{
            templateUrl:'components/ng-components/booking/appliance-info.html',
            controller : applianceController,
            bindings:{
                onDone:'&',
                booking:'<',
                onClose:'&'
            }
        });

        function applianceController(_){
            var vm = this;
            vm.viewAppliances = true;
            vm.showBrands = showBrands;
            vm.booking = vm.booking || {};
            vm.appliance = {};
            vm.addBrand = addBrand;
            vm.close = close;


           function showBrands(appliance){
               vm.viewAppliances = false;
               vm.appliance.applianceType = appliance;
               vm.viewBrands = true;
           }

           function addBrand(brand){
               vm.appliance.brand = brand;
               vm.booking.appliance = vm.appliance;
               vm.onDone({booking:vm.booking});
           }
           function close(){
                vm.onClose();
            }

        }

}());