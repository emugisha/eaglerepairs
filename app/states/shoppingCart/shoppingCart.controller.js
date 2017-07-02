/**
 * Created by Patrick on 8/May/2017.
 */


(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.shopCart')
    .controller('ShopCartController', ShopCartController);

  /* @ngInject */
 function ShopCartController(UsedService,CartService){
   var vm = this;
   // Read the data from the CartService
  vm.listItems = CartService.getList();
  //update the cart after deleting an appliance
  vm.removeFromCart=function(appliance){
    vm.list=CartService.updateCart(appliance);
  };
  //add back to used list
  vm.addBack=function(appliance){
      vm.appliances=UsedService.add(appliance);  
    };
  // to calculate the total price
  vm.getTotalPrice=function(appliance){
    var total=0;
    for (var i = 0; i < vm.listItems.length; i++){
      var item=vm.listItems[i];
      total+=item.price;
    }
    return total;
  }
 }
}
());
