"use strict";
exports.__esModule = true;
var BST_1 = require("./BST");
var tree = new BST_1.BST();
tree.insert("George");
tree.insert("Michael");
tree.insert("Tom");
tree.insert("Adam");
tree.insert("Jones");
tree.insert("Peter");
tree.insert("Daniel");
//traverse tree
console.log("Inorder (sorted): ");
tree.inorder();
console.log("The number of nodes is: " + tree.getSize());
