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

        function appliancesController(ApplianceService){
            var vm = this;
            vm.returnAppliance = returnAppliance;
            vm.allAppliances= ApplianceService.getAllAppliances();

             vm.chunks= Math.floor(vm.allAppliances.length/3);
             vm.groupedAppliances = _.chunk(vm.allAppliances, vm.chunks);

             function returnAppliance(applianceName){
                 vm.onSelect({appliance:applianceName});
             }
        }

}());
