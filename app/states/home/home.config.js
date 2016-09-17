(function(){

    'use strict';

    angular
        .module('eagleRepairsApp.states.home',[])
        .config(routes);

    function routes($stateProvider){
        $stateProvider
            .state('home',{
                url : '/',
                controller : 'HomeController',
                controllerAs : 'home',
                templateUrl : 'states/home/home.html'
            })

    }

}());