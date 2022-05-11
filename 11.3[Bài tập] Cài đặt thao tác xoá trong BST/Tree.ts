export class Node {
    value: any | null;
    left: Node | null;
    right: Node | null;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    root: Node;
    count: number;

    constructor(value) {
        this.root = new Node(value)
        this.count = 1;
    }

    size(): number {
        return this.count
    }

    insert(value): void {
        this.count++
        let newNode = new Node(value)

        let searchTree = node => {
            // if value < node.value, go left
            if (value < node.value) {
                if (!node.left) {
                    // if no left child, append new node
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
                // if value > node.value, go right
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(): number {
        let currentNode = this.root
        //go all the way to the last left child node
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }



    max(): number {
        let currentNode = this.root
        //go all the way to the last right child node
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    contains(value): boolean {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value) {
                return true
            }
            if (value > currentNode.value) {
                currentNode = currentNode.right
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
        }
        return false
    }

    // in-order
    // left, root, right
    // 2, 3, 12, 15, 28, 36, 39
    dfsInOrder(): number[] {
        let result = []
        let traverse = node => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result
    }

    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder(): number[] {
        let result = []
        let traverse = node => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result
    }

    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder(): number[] {
        let result = []
        let traverse = node => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root)
        return result
    }

    bfs(): number[] {
        let result = [];
        let queue = [];
        let count = 1
        queue.push(this.root)
        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            count++
        }
        return result
    }


    removeNode(value: number) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(node: Node, value: number): any {
        if (node === null) {
            return null
        } else if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
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
        let temp = this.findLasLeft(node.right);
        node.value = temp.value;
        node.right = this.deleteNode(node.right,temp.value);
        return node;
    }

    findLasLeft(node: Node): Node {
        let currentNode = node;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
}

const bts = new BST(15);
bts.insert(3)
bts.insert(2)
bts.insert(12)
bts.insert(36)
bts.insert(28)
bts.insert(39)

// bts.deleteNode(3);


// console.log(bts.root);
// console.log(bts.min())
// console.log(bts.max())
// console.log(bts.contains(2))
// console.log(bts.contains(2))

// console.log(bts.dfsInOrder())
// console.log(bts.dfsPostOrder())
// console.log(bts.dfsPreOrder())
console.log(bts.bfs())

