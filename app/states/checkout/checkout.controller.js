/**
 * Created by Patrick on 23/June/2017
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.checkout')
    .controller('CheckoutController', CheckoutController);

   /* @ngInject */
  function CheckoutController(CartService, $firebaseArray,UsedApplianceService,$alert) {

    var vm = this;
    vm.list = CartService.getList();
    vm.userInfo = {};
    vm.order = {};
    vm.orderPlaced = false;

    vm.submitDetails = function(){
      vm.order.userInfo = vm.userInfo;
      vm.order.cart = vm.list;
      var date = new Date();
      vm.order.userInfo.date = date.getTime();
      var ordersRef= UsedApplianceService.getAllOrdersRef();
      var orderList = $firebaseArray(ordersRef);
      orderList.$add(vm.order).then(function(ref){
        var id = ref.key;
        var myAlert = $alert({title: 'Order Placed', content: 'Your Order has been successfully placed.', placement: 'top', type: 'success',
          show: true, container:'#alerts-container'});
        vm.orderPlaced = true;

      });


    }
  }
}());
