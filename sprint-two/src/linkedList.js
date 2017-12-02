var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var lastNode = Node(value);
    if (list.tail === null) { 
      list.head = lastNode;
      list.tail = lastNode;
    } else {
      list.tail.next = lastNode;
      list.tail = lastNode;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value; 
    if (list.head === list.tail && list.head !== null) { 
      list.head = null;
      list.tail = null;
    } 
    if (list.head !== list.tail && list.head !== null) {
      list.head = list.head.next;
    } 
    return removed;
  };

  list.contains = function(target) {
    
    var recurse = function(node) {
      if (node === list.tail && node.value !== target) {
        return false;
      }     

      if (node.value !== target) {
        return recurse(node.next);
      }

      if (node.value === target) {
        return true;
      }

    };

    return recurse(list.head);
  };
    

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
 

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var actualNode = node || list.head;

// if(actualNode.value === target) {
    //   return true;
    // }
    
    // if (actualNode.value !== target && actualNode !== list.tail){
    //   list.contains(target, actualNode.next);
    // }

    // if (actualNode.value !== target && actualNode === list.tail) {
    //   return result;
    // }

    // return result; 



  //   if(actualNode !== target){
  //     if(actualNode === list.tail){
  //       return false;
  //     }
  //     else {
  //       list.contains(target, actualNode.next)
  //     }
  //   } else {
  //     return true; 
  //   }
  // };
