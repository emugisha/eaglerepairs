/**
 * Created by Patrick on 23/June/2017
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.checkout')
    .controller('CheckoutController', CheckoutController);

  /* @ngInject */
  function CheckoutController(CartService, $firebaseArray, UsedApplianceService, $alert, AuthService) {

    var vm = this;
    vm.list = CartService.getList();
    vm.getAllAppliances = getAllAppliances;
    vm.userInfo = {};
    vm.order = {};
    vm.orderPlaced = false;
    vm.allAppliances = [];
    vm.getAllAppliances();

    vm.submitDetails = function () {
        vm.order.userInfo = vm.userInfo;
        vm.order.cart = vm.list;
        var date = new Date();
        vm.order.userInfo.date = date.getTime();
        var ordersRef = UsedApplianceService.getAllOrdersRef();
        var orderList = $firebaseArray(ordersRef);

      AuthService.loginAnonymously().then(function (success) {
        orderList.$add(vm.order).then(function (ref) {
          var id = ref.key;
          var myAlert = $alert({
            title: 'Order Placed', content: 'Your Order has been successfully placed.', placement: 'top', type: 'success',
            show: true, container: '#alerts-container'
          });
          vm.orderPlaced = true;
          CartService.resetCart();
          removeFromStore();

        },function (error) {
          displayErrorAlert();
        });
      }).catch(function (error) {
        displayErrorAlert();
      });

    }

   function displayErrorAlert(){
     var myAlert = $alert({
       title: 'Error', content: 'Unable to process your order.Please try again later.', placement: 'top', type: 'danger',
       show: true, container: '#alerts-container'
     });
    }
    function getAllAppliances(){
      vm.allAppliances = $firebaseArray(UsedApplianceService.getAllUsedAppliances());
    }

    function removeFromStore() {
      for(var i=0;i<vm.list.length;i++){
        for(var j=0;j<vm.allAppliances.length;j++){
          if(vm.list[i].$id == vm.allAppliances[j].$id){
            deleteItem(vm.allAppliances[j]);
          }
        }
      }
    }

    function deleteItem(item){
      vm.allAppliances.$remove(item).then(function (result) {

      },function (error) {

      });
    }
  }
}());
