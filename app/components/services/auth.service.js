(function(){
    'use strict';

    angular
        .module('eagleRepairsApp')
        .factory('AuthService', authService);

        function authService(FirebaseService){
            var service ={
               login:login,
                loginAnonymously:loginAnonymously
            }
            return service

          function login(user){
              var auth = FirebaseService.firebaseAuth();
             return auth.signInWithEmailAndPassword(user.email,user.password);
          }

          function loginAnonymously() {
            var auth = FirebaseService.firebaseAuth();
            return auth.signInAnonymously()
          }
        }


}())
