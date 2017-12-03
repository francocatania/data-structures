

var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  if (this.storage[index] === undefined) {
    this.storage[index] = [k, v];
  }

  if (!Array.isArray(this.storage[index][0])) {
    var savedValue = this.storage[index];
    this.storage[index] = [];
    this.storage[index].push(savedValue);
    this.storage[index].push([k, v]);
  } 
  if (Array.isArray(this.storage[index][0])){
    this.storage[index].push([k, v]);
  }
}

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var result = undefined; 
  if (this.storage[index][0] === k){
    result = this.storage[index][1];
  }
  if (Array.isArray(this.storage[index][0])){
    for (var i = 0; i < this.storage[index].length; i ++){
      if(this.storage[index][i][0] === k){
        result = this.storage[index][i][1];
      }
    }
  }
  return result; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  if (this.storage[index][0] === k){
    this.storage[index][1] === undefined;
  } 
  if (Array.isArray(this.storage[index][0])){
    for(var i = 0;i < this.storage[index].length; i++){
      if(this.storage[index][i][0] === k) {
        this.storage[index][i][1] = undefined;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


