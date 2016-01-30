angular.module("myApp").directive('clockdirective', ['clockservice', function(clockservice){


  var linkFn = function(scope){
      scope.add = function() {
      clockservice.add();
     }
  };

  return {
      restrict: 'E',
      templateUrl: 'record.html',
      scope: {},
      link: linkFn,
  };






}]);
