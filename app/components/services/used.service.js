(function(){
    'use strict';
    angular
    .module('eagleRepairsApp')
    .factory('UsedService',UsedService);
    function UsedService(FirebaseService){
      var databaseRef = FirebaseService.firebaseDatabase();
      var appliances=[{}];
      var selectedAppliance = {};
      
        return {
          getAllAppliances:function() {
          return databaseRef.ref().child('appliances');
        },
          getAllOrdersRef:function(){
           return databaseRef.ref().child('orders');
        },
      //to update the used list
          remove:function(item){
          appliances.splice(appliances.indexOf(item),1);
          return appliances;
        },
      //to put the appliance back in the list of used appliances after it has been removed from the cart
          add:function(item){
          appliances.push(item);
          return appliances;
        },

          getSelectedAppliance:function(){
          return selectedAppliance;

      },
          setSelectedAppliance:function(appliance){
          selectedAppliance = appliance;
      }
    }

      
   
  
    }

        
    }());