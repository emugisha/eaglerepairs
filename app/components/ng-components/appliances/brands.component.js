(function(){
    'use strict';

    angular
        .module('eagleRepairsApp.components.booking')
        .controller('brandsController', brandsController)
        .component('brands',{
            templateUrl:'components/ng-components/appliances/brands.html',
            controller : brandsController,
            bindings:{
                onSelect:'&'
            }
        });

        function brandsController(ApplianceService){
            var vm = this;
            vm.addBrand = addBrand;
            vm.allBrands = ApplianceService.getAllBrands();
            vm.groupedBrands = _.chunk(vm.allBrands, Math.floor(vm.allBrands.length/3));

          function addBrand(brandName){
              vm.onSelect({brand:brandName});
          }
        }

}());
