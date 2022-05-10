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
                //if value > node.value, go right
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

    findLasLeftAndDelete(node: Node): number {
        let currentNode = node
        //go all the way to the last left child node
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        let result = currentNode.value
        currentNode.value = null
        return result
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
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result
    }

    bfs(): number[] {
        let result = [];
        let queue = [];
        queue.push(this.root)
        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode)

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result
    }

    deleteNode(value) {
        this.count--
        let currentNode;
        let previousNode;

        const searchTreeByValue = currentNode => {
            if (currentNode.value != value) {
                if (value < currentNode.value) {
                    previousNode = currentNode
                    currentNode = currentNode.left;
                    searchTreeByValue(currentNode)
                }
                if (value > currentNode.value) {
                    previousNode = currentNode
                    currentNode = currentNode.right;
                    searchTreeByValue(currentNode)
                }
            } else if (currentNode.value == value) {
                if(currentNode.left === null && currentNode.right === null){
                    previousNode.left = null
                    return;
                }
                if (currentNode.right) {
                    currentNode.value = this.findLasLeftAndDelete(currentNode.right);
                    return
                }
                if(currentNode.left){
                    currentNode.value = this.findLasLeftAndDelete(currentNode)
                    return;
                }
            }
        }
        searchTreeByValue(this.root)
        // console.log(currentNode);
        return currentNode
    }


}

let bts = new BST(15);
bts.insert(3)
bts.insert(2)
bts.insert(12)
bts.insert(9)
bts.insert(13)
bts.insert(36)
bts.insert(28)
bts.insert(39)
bts.deleteNode(39);


console.log(bts.root.right);
// console.log(bts.min())
// console.log(bts.max())
// console.log(bts.contains(2))
// console.log(bts.contains(2))

// console.log(bts.dfsInOrder())
// console.log(bts.dfsPostOrder())
// console.log(bts.dfsPreOrder())

