(function(){
    'use strict';
    angular
        .module('eagleRepairsApp.components.booking')
        .controller('userController', userController)
        .component('userInfo',{
            templateUrl:'components/ng-components/booking/user-info.html',
            controller : userController,
            bindings:{
                booking:'<',
                onDone:'&',
                onBack:'&'
            }
        });

        function userController(){
            var vm = this;
            vm.addUserInfo = addUserInfo;
            vm.goBack = goBack;

            function addUserInfo(){
                vm.onDone({booking:vm.booking});
            }

            function goBack(){
                vm.onBack({step: 1});
            }
            
        }

}());