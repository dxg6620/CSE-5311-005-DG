enum Color {
    RED,
    BLACK
}

class RBTNode {
    value: number;
    color: Color;
    left: RBTNode | null = null;
    right: RBTNode | null = null;
    parent: RBTNode | null = null;

    constructor(value: number) {
        this.value = value;
        this.color = Color.RED;
    }
}

class RedBlackTree {
    root: RBTNode | null = null;

    insert(value: number): void {
        const newNode = new RBTNode(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: RBTNode | null, newNode: RBTNode): RBTNode {
        if (!root) return newNode;

        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left.parent = root;
        } else {
            root.right = this.insertNode(root.right, newNode);
            root.right.parent = root;
        }
        return root;
    }

    private fixViolation(node: RBTNode): void {
        while (node !== this.root && node.parent?.color === Color.RED) {
            if (node.parent === node.parent?.parent?.left) {
                const uncle = node.parent.parent?.right;
                if (uncle?.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent?.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent?.left;
                if (uncle?.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent?.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    private rotateLeft(node: RBTNode): void {
        const rightChild = node.right!;
        node.right = rightChild.left;
        if (rightChild.left) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (!node.parent) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: RBTNode): void {
        const leftChild = node.left!;
        node.left = leftChild.right;
        if (leftChild.right) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (!node.parent) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: RBTNode | null, value: number): boolean {
        if (!node) return false;
        if (value === node.value) return true;
        return value < node.value
            ? this.searchNode(node.left, value)
            : this.searchNode(node.right, value);
    }

    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
        if (this.root) {
            this.root.color = Color.BLACK;
        }
    }

    private deleteNode(root: RBTNode | null, value: number): RBTNode | null {
        if (!root) return null;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left || !root.right) {
                const temp = root.left ? root.left : root.right;
                if (temp) {
                    return temp;
                } else {
                    return null;
                }
            } else {
                const minNode = this.minValueNode(root.right);
                root.value = minNode.value;
                root.right = this.deleteNode(root.right, minNode.value);
            }
        }
        return root;
    }

    private minValueNode(node: RBTNode): RBTNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}
