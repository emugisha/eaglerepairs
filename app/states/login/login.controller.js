/**
 * Created by emugisha
 */
(function () {
  'use strict';

  angular
    .module('eagleRepairsApp.states.login')
    .controller('LoginController', LoginController);

   /* @ngInject */
  function LoginController(AuthService,$window) {
    var vm = this;
    vm.gotoAdminPage = gotoAdminPage;
    vm.adminPanelUrl = "https://eaglestaradmin.firebaseapp.com/";

   function gotoAdminPage(){
     $window.location.href = vm.adminPanelUrl;
    }

  }
}());
