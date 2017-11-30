var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    index : -1,
    queueIndex : 0
  };
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = storage.index + 1;
    someInstance[index] = value; 
    storage.index += 1;
  };

  someInstance.dequeue = function() {
    // if (Object.keys(someInstance).length > 0){
    //   var index = storage.queueIndex; 
    //   var removedValue = someInstance[index];
    //   delete someInstance[index];
    //   storage.index --;
    //   storage.queueIndex ++;
    //   return removedValue;
    // }
    var index = storage.index;
    var removedValue = undefined;
    if (index >= 0) {
      removedValue = someInstance['0'];
      for (var i = 0; i <= index; i++) {
         someInstance[i] = someInstance[i + 1];
      }
      storage.index --;
    }
    return removedValue;
  };

  someInstance.size = function() {
    return storage.index + 1;
  };

  return someInstance;
};
