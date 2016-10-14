(function(){
    'use strict';

/**
 * @ngdoc overview
 * @name eaglerepairsApp
 * @description
 * # eaglerepairsApp
 *
 * Main module of the application.
 */

    angular
        .module('eagleRepairsApp', [
                'ngMessages',
                'ui.router',
                'eagleRepairsApp.states.home',
                'mgcrea.ngStrap',
                'ngAnimate'
        ]);

}());