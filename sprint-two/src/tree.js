var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  
  var result = false;

  var recurse = function(tree) {
    if (tree.value === target) {
      result = true;
    }

    if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        recurse(tree.children[i]);
      }
    }
  };

  recurse(this);
  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
