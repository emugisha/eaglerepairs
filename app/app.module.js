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
<<<<<<< HEAD
                'eagleRepairsApp.states.used',
                'eagleRepairsApp.states.used.shopCart',
                'eagleRepairsApp.states.used.details',
                'eagleRepairsApp.components.booking',
                'eagleRepairsApp.states.login',
                
=======
                'eagleRepairsApp.states.login',
                'eagleRepairsApp.states.used',
                'eagleRepairsApp.components.booking',
>>>>>>> f47c8ab69ddce0fec0b2741ed6f2b0ec7c22eda1
                'mgcrea.ngStrap',
                'ngSanitize',
                'hm.readmore',
                'ngAnimate',
                 'firebase'
        ]);

}());
