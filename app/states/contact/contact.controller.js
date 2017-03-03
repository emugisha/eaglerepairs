/**
 * Created by emugisha
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.contact')
    .controller('ContactController', contactController);

   /* @ngInject */
  function contactController() {

    var vm = this;
    vm.initialize = function() {
      var map = new google.maps.Map(document.getElementById('map_div'), {
        center: {lat: 38.995628, lng: -76.903385},
        zoom: 15,

      });
      vm.marker = new google.maps.Marker({
        position: {lat: 38.995628, lng: -76.903385},
        map:map
      });
    }

    google.maps.event.addDomListener(window, 'load', vm.initialize());

  }
}());
