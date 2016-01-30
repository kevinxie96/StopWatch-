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

module.controller('itemController', ['$scope', 'clockservice', function($scope, clockservice) {
  //testing...
 
  //array of times

 $scope.getTimes = clockservice.getTimes;
 $scope.getElapsed = clockservice.getElapsed;

  

    // remove an item
  $scope.remove = clockservice.remove;


}]);

module.service('userService', function(){
    this.users = ['John', 'James', 'Jake'];
});
