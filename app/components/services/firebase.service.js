(function(){
    'use strict';

    angular
        .module('eagleRepairsApp')
        .factory('FirebaseService', firebaseService);

        function firebaseService(){
            var service ={
                firebaseDatabase:firebaseDatabase,
                firebaseAuth:firebaseAuth
            }
            return service

          function firebaseDatabase(){
              return firebase.database();
          }

          function firebaseAuth(){
              return firebase.auth();
          }
        }


}());
