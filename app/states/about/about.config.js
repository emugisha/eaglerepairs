
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.about',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider
      
      .state('about', {
        url: '/about',
        controller:'AboutController',
        controllerAs:'about',
        templateUrl: 'states/about/about.html'

      });
  }
}());
