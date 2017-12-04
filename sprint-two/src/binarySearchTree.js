

var BinarySearchTree = function(value) {
  this.nodeValue = value; 
  this.left = null;
  this.right = null;
};



BinarySearchTree.prototype.insert = function (value){
  if (this.nodeValue > value) {
  	if (this.left === null) {
  	  this.left = new BinarySearchTree(value);
  	} else {
  	  this.left.insert(value);
  	}
  }

  if (this.nodeValue < value) {
  	if (this.right === null) {
  	  this.right = new BinarySearchTree(value);
  	} else {
  	  this.right.insert(value);
  	}
  }

};
  


BinarySearchTree.prototype.contains = function(value) {

  if (this.nodeValue === value) {
  	return true;
  }

  if (this.nodeValue > value) {
  	if (this.left === null) {
  	  return false;
  	} else {
  	  return this.left.contains(value);
  	}
  }

  if (this.nodeValue < value) {
  	if (this.right === null) {
  	  return false;
  	} else {
  	  return this.right.contains(value);
  	}
  }

  return false;
};



BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.nodeValue);
  
  if (this.left !== null) {
  	this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
  	this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
