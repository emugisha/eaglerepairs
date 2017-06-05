/**
 * Created by Patrick on 3/June/2017
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.details')
    .controller('DetailsController', DetailsController);

   /* @ngInject */
  function DetailsController(UsedService) {

    var vm = this;
    vm.fullDetails=UsedService.getSelectedAppliance();

  }
}());