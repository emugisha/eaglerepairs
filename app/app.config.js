(function(){
    'use strict';
    angular
        .module('eagleRepairsApp')
        .config(routes);


    function routes($urlRouterProvider){
    // if the path doesn't match any of the urls configured
    // otherwise will take care of routing the user to the home page
    $urlRouterProvider.otherwise('/');

    }

}());