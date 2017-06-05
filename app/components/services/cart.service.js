(function(){
    'use strict';
    angular
    .module('eagleRepairsApp')
    .factory('CartService',CartService);
    function CartService(){
      var list=[];
        
    return {
      addItem: addItem,
      getList: getList,
      updateCart:updateCart
    }

      function addItem(item) {
        console.log('Adding to list');
      
        list.push(item);  
        console.log(list);
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