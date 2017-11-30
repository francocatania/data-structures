var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.someInstance = {};
  return instance;
};

var stackMethods = {
  size : function(){
    return Object.keys(this.someInstance).length;
  },
  push : function(value) {
    this.someInstance[Object.keys(this.someInstance).length] = value;
  }, 
  pop : function() {
    var keys = Object.keys(this.someInstance).length;
    if (keys > 0) {
      var removedValue = this.someInstance[keys - 1];
      delete this.someInstance[keys - 1];
      return removedValue;
    } else {
      return 0;
    }
  }
};


