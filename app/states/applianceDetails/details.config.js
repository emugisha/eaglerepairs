/**
 * Created by Patrick on 3/June/2017.
 */

(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.used.details',[])
    .config(routes);

  function routes($stateProvider){
    $stateProvider

      .state('details', {
        url: '/applianceDetails',
        controller:'DetailsController',
        controllerAs:'details',
        templateUrl: 'states/applianceDetails/details.html'

      }) ;
  }
}());