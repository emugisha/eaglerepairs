(function(){
    'use strict';
    angular
    .module('eagleRepairsApp')
    .factory('UsedService',UsedService);
    function UsedService(){
      var appliances=[
        {id:100,type:'Air Conditioner',imageUrl:"images/used/admiralConditioner.jpg" ,features:'features are written here', details:'Admiral details go here',price:100,age:4},
        {id:101,type:'Boiler',imageUrl:"images/used/amanaBoiler.jpg",features:'features are written here',details:'Amana details should go here',price:150,age:1},
        {id:102,type:'Central Air Conditioner',imageUrl:"images/used/coldspotCentral.jpg",features:'features are written here',details:'Coldspot details go here',price:100,age:5},
        {id:103,type:'Cooktop',imageUrl:"images/used/estateCooktop.jpg",features:'features are written here',details:'Estate cooktop goes here',price:120,age:3},
        {id:104,type:'Dishwasher',imageUrl:"images/used/frigidaireDishwasher.jpg",features:'features are written here',details:'Frigidaire details go here',price:110,age:2},
        {id:105,type:'Dryer',imageUrl:"images/used/geDryer.jpg",features:'features are written here',details:'GE details go here',price:98,age:4},
        {id:106,type:'Elliptical Machine',imageUrl:"images/used/geProfileElliptical.jpg",features:'features are written here',details:'GE Profile details go here',price:67,age:2},
        {id:107,type:'Fitness Weight Machine',imageUrl:"images/used/gibsonFitness.jpg",features:'features are written here',details:'Gibson details go here',price:45,age:4},
        {id:108,type:'Freezer',imageUrl:"images/used/hotpointFreezer.jpg",features:'features are written here',details:'Hotpoint details go here',price:70,age:1}
        ];

        var selectedAppliance = {};
      
    return {
      getAllAppliances:function() {
        return appliances;
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