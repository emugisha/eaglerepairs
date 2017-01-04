(function(){
    'use strict';

    angular
        .module('eagleRepairsApp')
        .factory('AuthService', authService);

        function authService(FirebaseService){
            var service ={
               login:login
            }
            return service

          function login(user){
              var auth = FirebaseService.firebaseAuth();
             return auth.signInWithEmailAndPassword(user.email,user.password);
          }
        }
        

}())