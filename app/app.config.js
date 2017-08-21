(function(){
    'use strict';
    angular
        .module('eagleRepairsApp')
        .config(routes)
        .config(routeFixer)
        .constant('_', window._);


    function routes($urlRouterProvider){
    // if the path doesn't match any of the urls configured
    // otherwise will take care of routing the user to the home page
    $urlRouterProvider.otherwise('/');

    }

    //To fix the angular 1.6 url routes changes
  function routeFixer($locationProvider) {
    $locationProvider.hashPrefix('');
  }

}());
