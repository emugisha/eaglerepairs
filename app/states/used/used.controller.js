/**
 * Created by Patrick on 11/Feb/2017.
 */


(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used')
    .controller('UsedController', UsedController);

  /* @ngInject */
  function UsedController($state,UsedService,CartService) {
    var vm = this;
    vm.allAppliances= UsedService.getAllAppliances;
    vm.orderProp = 'age';
    vm.token = {};
    vm.addToList = function(appliance) {
    // Stuff the item into the cart list
      CartService.addItem(appliance);
      console.log(appliance);
      vm.token = {};
    };

    vm.gotoDetails = function(appliance){
      UsedService.setSelectedAppliance(appliance);
      $state.go('details');
    }
    vm.removeFromUsed=function(appliance){
      vm.appliances=UsedService.remove(appliance);
      
    };
    
    
    }  
}());
