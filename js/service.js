angular.module("myApp").service('clockservice', function(){
	var self = this;
	 this._times = [];

  
  	 this._t_elapsed = [];

  	 this.getTimes = function(){
  	 	return self._times;

  	 }
  	 this.getElapsed = function(){
  	 	return self._t_elapsed;

  	 }

	this.add = function() {
      var time = document.getElementById('time').innerHTML;
      self._times.push(time);
      self.input = '';
      var elapsed = document.d.d2.value;
      self._t_elapsed.push(elapsed);

  };
  	this.remove = function(index) {
    self._times.splice(index, 1);
    self._t_elapsed.splice(index, 1);
  };




});
