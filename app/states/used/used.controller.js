/**

 * Created by Patrick on 11/Feb/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used')
    .controller('UsedController', UsedController);

  /* @ngInject */

  function UsedController($state,UsedApplianceService,CartService,$firebaseArray) {
    var vm = this;
    vm.allAppliances=[];
    vm.orderProp = 'dateAdded';
    vm.token = {};
    vm.getAppliances = getAllAppliances;
    vm.gotoDetails = goToDetails;
    vm.addToList = addToCart;
    vm.getAppliances();


    function addToCart(index) {
      vm.allAppliances[index].available = false;
        // Stuff the item into the cart list
      CartService.addItem(vm.allAppliances[index]);
      $state.go('cart');
        vm.token = {};
    }


   function getAllAppliances(){
      vm.allAppliances = $firebaseArray(UsedApplianceService.getAllUsedAppliances());
    }

    function goToDetails(appliance){
      UsedApplianceService.setSelectedAppliance(appliance);
      $state.go('details');
    }
  }
}());
