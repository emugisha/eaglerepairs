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
    vm.showError=null;
    vm.user ={};
    vm.signIn = signIn;
    vm.adminPanelUrl = "http://localhost:4200"

   function signIn(){
     AuthService.login(vm.user).then(function(currentUser){
        window.location.href = vm.adminPanelUrl;
     }).catch(function (error){
       vm.showError = "Invalid username or Password";
     });
    }

  }
}());
