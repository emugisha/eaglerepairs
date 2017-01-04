(function(){
    'use strict';

    angular
        .module('eagleRepairsApp')
        .factory('BookingService', bookingService);

        function bookingService(FirebaseService){
            var service ={
               save:save
            }
            return service

          function save(booking){
              var databaseRef = FirebaseService.firebaseDatabase();
              var newId = databaseRef.ref().child('Bookings/NewBookings').push().key;
              //databaseRef.ref("Bookings/NewBookings/" + newId).set(booking);
              var updates = {};
              updates['/Bookings/NewBookings/' + newId + '/appliance'] = booking.appliance;
              updates['/Bookings/NewBookings/'  + newId + '/clientDetails'] = booking.clientDetails;
              updates['/Bookings/NewBookings/'  + newId + '/availability'] = booking.availability;
              console.log("availability");
              console.log(booking.availability);

              return databaseRef.ref().update(updates);
          }
        }
        

}())