(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.states.home')
        .controller('HomeController', HomeController);

    function HomeController($location, $anchorScroll){
        var vm = this;
        vm.gotoReviews = gotoReviews;
        vm.brandsImages1 = ['images/brands/kenmore.png',
                           'images/brands/whirlpool.png',
                           'images/brands/frigidaire.png',
                           'images/brands/maytag.png',
                           'images/brands/ge.png',
                           'images/brands/lg.png'];

        vm.brandsImages2 = ['images/brands/jenair.png',
                            'images/brands/kitchenAid.png',
                           'images/brands/electrolux.png',
                           'images/brands/bosch.png',
                           'images/brands/samsung.png',
                           'images/brands/admiral.jpg'];


        

        function gotoReviews(){
            console.log("reviews");
            $location.hash('reviews');
            $anchorScroll();
        }
     
    }

}());