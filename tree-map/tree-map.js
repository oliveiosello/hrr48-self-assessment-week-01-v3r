/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

// Tree String
// (String -> b)

Tree.prototype.map = function(f) {
  let newTree = new Tree();
  newTree.value = f(this.value);
  for (var i = 0; i < this.children.length; i++) {
      newTree.children[i] = this.children[i].map(f);
  }
  return newTree;
};

Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
};

// mappedTree.value = map(this.value)
// mappedTree.children = map(this.children)
// need to add the result of calling map on the value of each key
//// determine if child array has children, call map on each element of child array
///// recursive function


// create help func add children
//

// create map method for tree class
// in mapping func
// out new tree
//// accepts map func as only arg
//// create result tree obj
//// traverse tree
////// apply input fun to each key/val
////// add to result tree
//// return result tree

// tree {
//// value: value,
//// children: [
////// value: value,
////// children: [
//////// value: value,
//////// children: []
//////// ]
////// ]
//// value: value,
//// childre: []

//}