'use strict';

var storeApp = angular.module('AngularStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'views/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'views/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'views/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

storeApp.factory("DataService", function () {

    var myStore = new store();
    var myCart = new shoppingCart("AngularStore");
    myCart.addCheckoutParameters("PayPal", "satvir.grewal03@gmail.com");
    
    return {
        store: myStore,
        cart: myCart
    };
});