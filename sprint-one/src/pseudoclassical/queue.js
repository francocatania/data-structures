var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = { index : -1};
  this.someInstance = {};
};

Queue.prototype.size = function() {
  return this.storage.index + 1;
};

Queue.prototype.enqueue = function (value) {
  this.someInstance[this.storage.index + 1] = value;
  this.storage.index ++;
};

Queue.prototype.dequeue = function() {
  if (this.storage.index > -1) {
    var removedVal = this.someInstance['0'];
    for (var i = 0; i < this.storage.index; i++ ) {
      this.someInstance[i] = this.someInstance[i + 1];
    }
    delete this.someInstance[this.storage.index]
    this.storage.index--;
    return removedVal;
  } else {
    return 0;
  }
};


