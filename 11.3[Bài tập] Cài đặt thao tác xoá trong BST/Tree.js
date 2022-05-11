"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.Node = Node;
var BST = /** @class */ (function () {
    function BST(value) {
        this.root = new Node(value);
        this.count = 1;
    }
    BST.prototype.size = function () {
        return this.count;
    };
    BST.prototype.insert = function (value) {
        this.count++;
        var newNode = new Node(value);
        var searchTree = function (node) {
            // if value < node.value, go left
            if (value < node.value) {
                if (!node.left) {
                    // if no left child, append new node
                    node.left = newNode;
                }
                else {
                    searchTree(node.left);
                }
                // if value > node.value, go right
            }
            else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    };
    BST.prototype.min = function () {
        var currentNode = this.root;
        //go all the way to the last left child node
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };
    BST.prototype.max = function () {
        var currentNode = this.root;
        //go all the way to the last right child node
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };
    BST.prototype.contains = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            }
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
        }
        return false;
    };
    // in-order
    // left, root, right
    // 2, 3, 12, 15, 28, 36, 39
    BST.prototype.dfsInOrder = function () {
        var result = [];
        var traverse = function (node) {
            if (node.left)
                traverse(node.left);
            result.push(node.value);
            if (node.right)
                traverse(node.right);
        };
        traverse(this.root);
        return result;
    };
    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    BST.prototype.dfsPreOrder = function () {
        var result = [];
        var traverse = function (node) {
            result.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        };
        traverse(this.root);
        return result;
    };
    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    BST.prototype.dfsPostOrder = function () {
        var result = [];
        var traverse = function (node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    };
    BST.prototype.bfs = function () {
        var result = [];
        var queue = [];
        var count = 1;
        queue.push(this.root);
        while (queue.length) {
            var currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            count++;
        }
        return result;
    };
    BST.prototype.removeNode = function (value) {
        this.root = this.deleteNode(this.root, value);
    };
    BST.prototype.deleteNode = function (node, value) {
        if (node === null) {
            return null;
        }
        else if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
        }
        var temp = this.findLasLeft(node.right);
        node.value = temp.value;
        node.right = this.deleteNode(node.right, temp.value);
        return node;
    };
    BST.prototype.findLasLeft = function (node) {
        var currentNode = node;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    };
    return BST;
}());
exports.BST = BST;
var bts = new BST(15);
bts.insert(3);
bts.insert(2);
bts.insert(12);
bts.insert(36);
bts.insert(28);
bts.insert(39);
// bts.deleteNode(3);
// console.log(bts.root);
// console.log(bts.min())
// console.log(bts.max())
// console.log(bts.contains(2))
// console.log(bts.contains(2))
// console.log(bts.dfsInOrder())
// console.log(bts.dfsPostOrder())
// console.log(bts.dfsPreOrder())
console.log(bts.bfs());
