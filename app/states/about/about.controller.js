/**
 * Created by emugisha
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.about')
    .controller('AboutController', aboutController);

   /* @ngInject */
  function aboutController(ApplianceService) {

    var vm = this;
    vm.allAppliances= ApplianceService.getAllAppliances();

    vm.chunks= Math.floor(vm.allAppliances.length/3);
    vm.groupedAppliances = _.chunk(vm.allAppliances, vm.chunks);
  }
}());
