/**
 * Created by Patrick on 3/June/2017
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.details')
    .controller('DetailsController', DetailsController);

   /* @ngInject */
  function DetailsController(UsedApplianceService,CartService,$state) {

    var vm = this;
    vm.applianceDetails = UsedApplianceService.getSelectedAppliance();
    vm.addToCart = addToCart;
    if(!vm.applianceDetails) {
      $state.go('used');
    }else{
      vm.selectedImage = vm.applianceDetails.imageUrls[0];
    }

    function addToCart() {
      vm.applianceDetails.available = false;
      // Stuff the item into the cart list
      CartService.addItem(vm.applianceDetails);
      $state.go('cart');
    }

  }
}());
