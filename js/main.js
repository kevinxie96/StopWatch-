//clock
$(document).ready(function() {
    if($(".splash").is(":visible")) {
        $(".wrapper").css({"opacity":"0"});
    }

    $(".splash-arrow").click(function() {
        $(".splash").slideUp("800", function() {
            $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
        });
    });

});


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
