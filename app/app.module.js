(function(){
    'use strict';

/**
 * @ngdoc overview
 * @name eagleRepairsApp
 * @description
 * # eagleRepairsApp
 *
 * Main module of the application.
 */

    angular
        .module('eagleRepairsApp', [
                'ngMessages',
                'ui.router',
                'eagleRepairsApp.states.home',
                'eagleRepairsApp.components.booking',
                'mgcrea.ngStrap',
                'ngAnimate'
        ]);

}());