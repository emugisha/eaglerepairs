(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.states.home')
        .controller('HomeController', HomeController);

    function HomeController(){
        var vm = this;
        this.awesomeThings = [
            'Eagle',
            'AngularJS',
            'Karma',
            'bruh'
            ];

        vm.brandsImages = ['images/brands/kenmore.png',
                           'images/brands/whirlpool.png',
                           'images/brands/frigidaire.png',
                           'images/brands/maytag.png',
                           'images/brands/ge.png',
                           'images/brands/lg.png'];
     
    }

}());