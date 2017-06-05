/**
 * Created by Patrick on 8/May/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.shopCart',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider

      .state('cart', {
        url: '/cart',
        controller:'ShopCartController',
        controllerAs:'cart',
        templateUrl: 'states/shoppingCart/used.shoppingCart.html'

      }) ;
  }
}());
