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
                'eagleRepairsApp.states.used',
                'eagleRepairsApp.states.used.shopCart',
                'eagleRepairsApp.states.used.details',
                'eagleRepairsApp.components.booking',
                'eagleRepairsApp.states.login',
                
                'mgcrea.ngStrap',
                'ngSanitize',
                'hm.readmore',
                'ngAnimate',
                 'firebase'
        ]);

}());