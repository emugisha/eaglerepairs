/**
 * Created by Patrick on 23/June/2017
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.checkout')
    .controller('CheckoutController', CheckoutController);

   /* @ngInject */
  function CheckoutController(CartService, $firebaseArray,UsedService) {

    var vm = this;
    vm.list = CartService.getList();
    vm.userInfo = {};
    vm.order = {};

    vm.submitDetails = function(){
      vm.order.userInfo = vm.userInfo;
      vm.order.cart = vm.list;
      var ordersRef= UsedService.getAllOrdersRef();
      var orderList = $firebaseArray(ordersRef);
      orderList.$add(vm.order).then(function(ref){
        var id = ref.key;
      });

    }
  }
}());