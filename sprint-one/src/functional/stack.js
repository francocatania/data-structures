var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    index : -1
  };

  // Implement the methods below
  someInstance.push = function(value) {
    var index = storage.index+1;
    someInstance[index] = value;
    storage.index += 1;
  };

  someInstance.pop = function() {
    var index = storage.index;
    var poppedValue = undefined;
    if (index >= 0) {
      poppedValue = someInstance[index];
      delete someInstance[index];
      storage.index -= 1;
    }
    return poppedValue; 
  };

  someInstance.size = function() {
    return storage.index+1;
  };

  return someInstance;
};

