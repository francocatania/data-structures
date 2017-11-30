var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // _.extend(this, stackMethods);
  var stackInstance = {};  
  stackInstance.storage = {};
  stackInstance.someInstance = {};
  _.extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {}

stackMethods.size = function() {
  // var someInstance = this.someInstance; 
  return Object.keys(this.someInstance).length;
};

stackMethods.push = function(value){
  // var someInstance = this.someInstance;
  this.someInstance[Object.keys(this.someInstance).length] = value;
};

stackMethods.pop = function(){
  // var someInstance = this.someInstance;
  if (Object.keys(this.someInstance).length > 0){
    var removedValue = this.someInstance[Object.keys(this.someInstance).length - 1];
    delete this.someInstance[Object.keys(this.someInstance).length - 1];
    return removedValue;
  } else {
    return undefined
  }
};


console.log(Stack);



