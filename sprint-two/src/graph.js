


var Graph = function() {
  this.nodes = {};
}

Graph.prototype.addNode = function(value) {
  this.nodes[value.toString()] = { 
  value : value,
  connections : []
  };
};

Graph.prototype.contains = function(value) {
  var keys = Object.keys(this.nodes);
  for (var i = 0; i < keys.length; i ++){
    if(keys[i] === value.toString()){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode.toString()].connections.push(toNode.toString());
  this.nodes[toNode.toString()].connections.push(fromNode.toString());
  
};

Graph.prototype.removeNode = function(value) {
  var connections = this.nodes[value.toString()].connections;
  for(var i = 0; i < this.nodes[value.toString()].connections.length; i++){
    this.removeEdge(this.nodes[value.toString()].value, connections[i]);
  }
  delete this.nodes[value.toString()];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode.toString()].connections.indexOf(toNode.toString()) !== -1){
    return true;
  } else {
    return false; 
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)){
    var toIndex = this.nodes[fromNode.toString()].connections.indexOf(toNode.toString())
    var fromIndex = this.nodes[toNode.toString()].connections.indexOf(fromNode.toString())
    this.nodes[fromNode.toString()].connections.splice(toIndex, 1);
    this.nodes[toNode.toString()].connections.splice(fromIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb) {
  // var arr = Object.keys(this.nodes);
  // for (var i = 0; i < arr.length; i ++){
  //   cb.call(arr[i]);
  for (var key in this.nodes) {
    cb(key);
  }

  // for (keys in this.nodes) {
  //   console.log(keys);
  //   console.log(this.nodes[keys].connections);
  //   //cb.apply(this.nodes[keys], arguments);
  // }
};