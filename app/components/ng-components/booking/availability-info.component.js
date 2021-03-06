(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('availabilityInfoController', availabilityInfoController)
        .component('availabilityInfo',{
            templateUrl:'components/ng-components/booking/availability-info.html',
            controller : availabilityInfoController,
            bindings:{
                booking:'<',
                onDone:'&',
                onBack:'&'
            }
        });

        function availabilityInfoController(){
            var vm = this; 
            vm.addAvailabilityInfo = addAvailabilityInfo;
            vm.fromDate = new Date(); 
            vm.goBack = goBack;
            
            function addAvailabilityInfo(){
                vm.onDone({booking: vm.booking});
            }

            function goBack(){
                vm.onBack();
            }
        }

}());