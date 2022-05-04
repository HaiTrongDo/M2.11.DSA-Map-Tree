import {BST} from "./BST";

let tree: BST = new BST();
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