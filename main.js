var myApp = angular.module('myApp', ['ngAnimate']);
myApp.controller('myController', function ($scope) {
  $scope.IsVisible = false;
  $scope.inventory = [
    { id :  1, category : "Publicist", description : "Handle news coverage"},
    { id :  2, category : "Social media manager", description : "Curate Instagram posts"},
    { id :  3, category : "HR executive", description : "Manage Human Resources"},
    { id :  4, category : "Software Intern", description : "Find and work on solutions"},
    { id :  5, category : "Website Manager", description : "Revamping and improving website"},
    { id :  6, category : "Content creator", description : "Write content for social media, blogs, websites"},
    { id :  7, category : "Data Analyst", description : "Analyze customer trends and other metrics"},
    { id :  8, category : "Marketing Intern", description : "Marketing our brand and merch"}

  ];

  $scope.cart = [];
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };

  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

  $scope.showHide = function(){
      $scope.IsVisible = true;
  }

});