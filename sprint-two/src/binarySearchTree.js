var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.nodeValue = value; 
  newBinary.children = [null, null];
  _.extend(newBinary, binaryMethods);
  return newBinary;
};

var binaryMethods = {};

binaryMethods.left = function() {
  return this.children[0];
};
   
binaryMethods.right = function() {
  return this.children[1];
};
  
binaryMethods.contains = function(value) {
  if (this.nodeValue === value){
    return true;
  } 
  if (this.nodeValue > value) {
    if (this.children[0] === null){
      return false;
    }
    this.nodeValue.childen[0].contains(value);
  }
  if (this.nodeValue < value) {
    if (this.children[1] === null){
      return false;
    }
    this.nodeValue.children[1].contains(value);
  }
};

binaryMethods.depthFirstLog = function(){
  
};

binaryMethods.insert = function (value){
  
  //var lastNode = undefined;
  var search = function(value, node) {
    console.log(node)
    if (node.nodeValue < value && node.children[1] === null) {
      node.children[1] = BinarySearchTree(value);
      return true;
    }
    if (node.nodeValue > value && node.children[0] === null) {
      node.children[0] = BinarySearchTree(value);
      return true;
    }
    if (node.nodeValue < value && node.children[1] !== null) {
      search(value, node.right());
    }
    if (node.nodeValue > value && node.children[0] !== null) {
      search(value, node.left());
    }
  };
  search(value, this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
