(function(){
    'use strict';
    angular
    .module('eagleRepairsApp')
    .factory('CartService',CartService);


    function CartService($localStorage){
      var list=[];
      var newList=[];
      $localStorage = $localStorage.$default({
        cart :[]
      });

    return {
      addItem: addItem,
      getList: getList,
      updateCart:updateCart,
      resetCart:resetCart
    }

      function addItem(item) {
        $localStorage.cart.push(item);
        //list.push(item);
      }

      function getList() {
        // var items = [];
        // var allAppliances = $firebaseArray(UsedApplianceService.getAllUsedAppliances());
        var cartItems = $localStorage.cart;
        /*for(var i=0;i<allAppliances.length;i++){
          for(var j=0;j<cartItems.length;j++){
            if(cartItems[j] == allAppliances[i].applianceId ){
              items.push(allAppliances[i]);
            }
          }
        }*/
        return cartItems;
      }
      //update the cart after removing an item
      function updateCart(item){
        //list.splice(list.indexOf(item),1);
        $localStorage.cart.splice($localStorage.cart.indexOf(item), 1)
      }

      function resetCart(){
        $localStorage.$reset({
          cart: []
        });
      }



    }
    }());
