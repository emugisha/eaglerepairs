/**
 * Created by Patrick on 8/May/2017.
 */


(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.shopCart')
    .controller('ShopCartController', ShopCartController);

  /* @ngInject */
 function ShopCartController(UsedApplianceService,CartService){
   var vm = this;
   // Read the data from the CartService
  vm.listItems = CartService.getList();
  vm.totalCost = 0;
  //update the cart after deleting an appliance
   vm.removeFromCart = removeFromCart;
   vm.addBack = addBack;
   vm.getTotalPrice = getTotalPrice;
   vm.getTotalPrice();

  function removeFromCart(appliance){
    CartService.updateCart(appliance);
    vm.getTotalPrice();
  }
  //add back to used list
  function addBack(appliance){
      UsedApplianceService.add(appliance);
      vm.getTotalPrice();
  }
  // to calculate the total price
  function getTotalPrice(){
    vm.totalCost = 0;
    var cartList = CartService.getList();
    for (var i = 0; i < cartList.length; i++){
      var item=cartList[i];
      vm.totalCost+= parseFloat(item.price);
    }
  }

 }
}
());
