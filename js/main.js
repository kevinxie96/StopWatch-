//clock
window.onload = function() {
  startTime();
  startTimea();
};


var myApp = angular.module('myApp',[]);

myApp.controller('itemController', ['$scope', function($scope) {
  //testing...
  $scope.testing = 'wassup!';
  //array of times
  $scope.times = [];
  //add time
  $scope.add = function() {
      time = document.getElementById('time').innerHTML
      $scope.times.push(time);
      $scope.input = '';
  };
    // remove an item
  $scope.remove = function(index) {
    $scope.times.splice(index, 1);
  };
}]);
