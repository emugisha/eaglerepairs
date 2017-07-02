/**

 * Created by Patrick on 11/Feb/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used')
    .controller('UsedController', UsedController);

  /* @ngInject */

  function UsedController($state,UsedService,CartService,$firebaseArray) {
    var vm = this;
    vm.allAppliances=[];
    vm.orderProp = 'age';
    vm.token = {};
    vm.getAppliances=getAllAppliances;
    vm.getAppliances();
    vm.addToList = function(index) {
    vm.allAppliances[index].available = false;
    // Stuff the item into the cart list
    CartService.addItem(vm.allAppliances[index]);
    vm.token = {};
    };
   function getAllAppliances(){
    let appliances = UsedService.getAllAppliances();
    vm.allAppliances = $firebaseArray(appliances);
    }
    vm.gotoDetails = function(appliance){
      UsedService.setSelectedAppliance(appliance);
      $state.go('details');
    }
  }
}());
