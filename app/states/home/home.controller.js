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
            'Karma'
            ];
    }

}());