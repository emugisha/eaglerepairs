(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('reviewController', reviewController)
        .component('review',{
            templateUrl:'components/ng-components/booking/review.html',
            controller : reviewController,
            bindings:{
                booking:'<',
                onDone:'&',
                onBack:'&'
            }
        });

        function reviewController(){
            var vm = this; 
            vm.goBack = goBack;
            vm.submitBooking = submitBooking;

            function goBack(){
                vm.onBack();
            }
            function submitBooking(){
                
            }
        }

}());