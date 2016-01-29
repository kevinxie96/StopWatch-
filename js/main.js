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

//possible use ng-init?
window.onload = function() {
  startTime();
  reference();
  elapsed();
};



var module = angular.module('myApp',[]);

module.controller('itemController', ['$scope',  function($scope) {
  //testing...

  //array of times
  $scope.times = [];

  //add time
  $scope.t_elapsed = [];


  $scope.add = function() {
      var time = document.getElementById('time').innerHTML;
      $scope.times.push(time);
      $scope.input = '';
      var elapsed = document.d.d2.value;
      $scope.t_elapsed.push(elapsed);

  };
    // remove an item
  $scope.remove = function(index) {
    $scope.times.splice(index, 1);
    $scope.t_elapsed.splice(index, 1);
  };



}]);

module.service('userService', function(){
    this.users = ['John', 'James', 'Jake'];
});
