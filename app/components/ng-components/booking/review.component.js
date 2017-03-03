(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('reviewController', reviewController)
        .component('review',{
            templateUrl:'components/ng-components/booking/review.html',
            controller : reviewController,
            bindings:{
                booking:'<',
                onDone:'&',
                onBack:'&'
            }
        });

        function reviewController(BookingService, AuthService, $alert){
            var vm = this;
            vm.goBack = goBack;
            vm.submitBooking = submitBooking;
            vm.done = false;
            vm.close = close;
            function goBack(){
                vm.onBack();
            }
            function submitBooking(){

              AuthService.loginAnonymously().then(function (success) {
                 BookingService.save(vm.booking).then(function (success) {
                   displaySuccessAlert();
                 });
                }).catch(function (error) {
                displayErrorAlert();
              });
            }

            function displaySuccessAlert(){
            vm.done = true;
            var myAlert = $alert({title: 'Success!', content: 'You have successfully booked a repair. One of our technicians will contact you soon.', placement: 'top', type: 'success',
              show: true, container:'#alerts-container'});
          }

          function displayErrorAlert(){
            vm.done = true;
            var myAlert = $alert({title: 'Error!', content: 'An error occurred with your booking. Please Try again later', placement: 'top', type: 'danger',
              show: true, container:'#alerts-container'});
          }

          function close() {
            vm.onDone();
          }
        }

}());
