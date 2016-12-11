
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.login',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider
      
      .state('login', {
        url: '/login',
        controller:'LoginController',
        controllerAs:'login',
        templateUrl: 'states/login/login.html'

      });
  }
}());
