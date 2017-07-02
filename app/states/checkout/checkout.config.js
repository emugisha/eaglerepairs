/**
 * Created by Patrick on 23/June/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.checkout',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider

      .state('checkout', {
        url: '/checkout',
        controller:'CheckoutController',
        controllerAs:'checkout',
        templateUrl: 'states/checkout/checkout.html'

      }) ;
  }
}());