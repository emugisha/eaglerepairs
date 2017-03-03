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
        .module('eagleRepairsApp',
				[
                'ngMessages',
                'ui.router',
                'eagleRepairsApp.states.home',
                'eagleRepairsApp.states.about',
                'eagleRepairsApp.states.contact',
                'eagleRepairsApp.components.booking',
                'eagleRepairsApp.states.login',
                'eagleRepairsApp.states.used',
                'mgcrea.ngStrap',
                'ngSanitize',
                'hm.readmore',
                'ngAnimate',
                 'firebase'
        ]);

}());
