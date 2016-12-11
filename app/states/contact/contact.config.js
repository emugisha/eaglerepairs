
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.contact',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider
      
      .state('contact', {
        url: '/contact',
        controller:'ContactController',
        controllerAs:'contact',
        templateUrl: 'states/contact/contact.html'

      });
  }
}());
