export interface Tree {
    /**
     * Insert element e into the binary search tree.
     * Return true if the element is inserted successfully.
     */
    insert(e): boolean;
    /**
     * Inorder traversal from the root
     */
    inorder(): void;
    /**
     * Get the number of nodes in the tree
     */
    getSize(): number;
}