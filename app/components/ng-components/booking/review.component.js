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
                onDone:'&'
            }
        });

        function reviewController(){
            var vm = this; 
        }

}());