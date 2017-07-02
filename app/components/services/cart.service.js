(function(){
    'use strict';
    angular
    .module('eagleRepairsApp')
    .factory('CartService',CartService);
    function CartService(){
      var list=[];
      var newList=[];
    
    return {
      addItem: addItem,
      getList: getList,
      updateCart:updateCart
    }

      function addItem(item) {
        
        list.push(item);      
      }

      function getList() {
        return list;
      }
      //update the cart after removing an item
      function updateCart(item){
        list.splice(list.indexOf(item),1);
      }
      
   
    
    }  
    }());