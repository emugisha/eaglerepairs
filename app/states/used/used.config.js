/**
 * Created by emugisha on 2/20/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider

      .state('used', {
        url: '/used',
        controller:'UsedController',
        controllerAs:'used',
        templateUrl: 'states/used/used.html'

      });
  }
}());
