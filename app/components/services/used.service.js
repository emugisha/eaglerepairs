(function(){
    'use strict';

    angular
    .module('eagleRepairsApp')
    .factory('UsedApplianceService',UsedApplianceService);


    function UsedApplianceService(FirebaseService){
      var databaseRef = FirebaseService.firebaseDatabase();
      var appliances=[{}];
      var selectedAppliance;

      var service = {
        getAllUsedAppliances:getAllUsedAppliances,
        getAllOrdersRef:getAllOrdersRef,
        removeAppliance:removeAppliance,
        add:add,
        getSelectedAppliance:getSelectedAppliance,
        setSelectedAppliance:setSelectedAppliance
      };
      return service;

      function getAllUsedAppliances() {
        //TODO:Rename the database instance to used-appliances
          return databaseRef.ref().child('appliances');
      }

      function getAllOrdersRef(){
           return databaseRef.ref().child('Orders/recent');
      }

      //to update the used list
      function removeAppliance(item){
          appliances.splice(appliances.indexOf(item),1);
          return appliances;
      }
      //to put the appliance back in the list of used appliances after it has been removed from the cart
      function add(item){
          appliances.push(item);
          return appliances;
      }

      function getSelectedAppliance(){
          return selectedAppliance;

      }
      function setSelectedAppliance(appliance){
          selectedAppliance = appliance;
      }
    }

}());
