/**
<<<<<<< HEAD
 * Created by Patrick on 11/Feb/2017.
=======
 * Created by emugisha on 2/20/2017.
>>>>>>> f47c8ab69ddce0fec0b2741ed6f2b0ec7c22eda1
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

<<<<<<< HEAD
      }) ;
=======
      });
>>>>>>> f47c8ab69ddce0fec0b2741ed6f2b0ec7c22eda1
  }
}());
