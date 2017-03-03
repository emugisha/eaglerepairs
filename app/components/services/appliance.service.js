(function(){
  'use strict';

  angular
    .module('eagleRepairsApp')
    .factory('ApplianceService', ApplianceService);

  function ApplianceService(){
    var service ={
      getAllAppliances:getAllAppliances,
      getAllBrands:getAllBrands
    };
    return service


    function getAllAppliances() {
      var appliances=['Air Conditioner','Boiler','Central Air Conditioner','Cooktop','Dishwasher','Dryer','Elliptical Machine','Fitness Weight Machine','Freezer',
        'Furnace','Garage Door Opener','Garbage Disposal','Grill','Heat Pump','Ice Maker Freestanding','Microwave','Double Oven','Oven','Range',
        'Range Hood','Refrigerator','Riding Mower','Snowblower','Stacked Laundry Unit','Stationary Bike','Stepper','Treadmill','TV','Trash Compactor',
        'Washer','Water Heater','Wide Deck Mower','Whole House Dehumidifiers and Humidifiers'];
      return appliances;
    }
    function getAllBrands() {
      var brands = ['Admiral','Amana','Coldspot','Estate','Frigidaire','GE','GE Profile','Gibson','Hotpoint','Kenmore',
        'Kenmore Elite','KitchenAid','LG','Maytag','Roper','Samsung','Westinghouse','Whirlpool'];
      return brands;
    }
  }


}())
