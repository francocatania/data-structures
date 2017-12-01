var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.someInstance = {};
};

Stack.prototype.size = function() {
  return Object.keys(this.someInstance).length;
};

Stack.prototype.push = function(value) {
  this.someInstance[Object.keys(this.someInstance).length] = value;
};

Stack.prototype.pop = function() {
  if (this.size() > 0) {
    var removed = this.someInstance[Object.keys(this.someInstance).length - 1];
    delete this.someInstance[Object.keys(this.someInstance).length - 1];
    return removed;
  } else {
    return 0;
  }
};