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
  }
  //add back to used list
  function addBack(appliance){
      UsedApplianceService.add(appliance);
  }
  // to calculate the total price
  function getTotalPrice(){
    var total=0;
    for (var i = 0; i < vm.listItems.length; i++){
      var item=vm.listItems[i];
      vm.totalCost+=item.price;
    }
    return total;
  }

 }
}
());
