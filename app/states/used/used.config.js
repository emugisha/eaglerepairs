/**

 * Created by Patrick on 11/Feb/2017.

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


      }) ;

      };
}());
