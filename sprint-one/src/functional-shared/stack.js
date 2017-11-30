var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // _.extend(this, stackMethods);
  var instance = Object.create(stackMethods);
  return instance;
};

var stackMethods = {
  someInstance : {
  },
  storage : {
  },
  size : function() {
    var someInstance = this.someInstance; 
    return Object.keys(someInstance).length;
  },
  push : function(value){
    var someInstance = this.someInstance;
    someInstance[Object.keys(someInstance).length] = value;
  }
  
};


