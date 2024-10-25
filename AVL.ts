class AVLNode {
    value: number;
    left: AVLNode | null = null;
    right: AVLNode | null = null;
    height: number = 1;

    constructor(value: number) {
        this.value = value;
    }
}

class AVLTree {
    root: AVLNode | null = null;

    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: AVLNode | null, value: number): AVLNode {
        if (!node) return new AVLNode(value);

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        return this.balanceNode(node);
    }

    private getHeight(node: AVLNode | null): number {
        return node ? node.height : 0;
    }

    private getBalance(node: AVLNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    private balanceNode(node: AVLNode): AVLNode {
        const balance = this.getBalance(node);
        if (balance > 1) {
            if (this.getBalance(node.left) < 0) {
                node.left = this.rotateLeft(node.left!);
            }
            return this.rotateRight(node);
        }
        if (balance < -1) {
            if (this.getBalance(node.right) > 0) {
                node.right = this.rotateRight(node.right!);
            }
            return this.rotateLeft(node);
        }
        return node;
    }

    private rotateLeft(node: AVLNode): AVLNode {
        const rightChild = node.right!;
        node.right = rightChild.left;
        rightChild.left = node;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        rightChild.height = 1 + Math.max(this.getHeight(rightChild.left), this.getHeight(rightChild.right));
        return rightChild;
    }

    private rotateRight(node: AVLNode): AVLNode {
        const leftChild = node.left!;
        node.left = leftChild.right;
        leftChild.right = node;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        leftChild.height = 1 + Math.max(this.getHeight(leftChild.left), this.getHeight(leftChild.right));
        return leftChild;
    }

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: AVLNode | null, value: number): boolean {
        if (!node) return false;
        if (value === node.value) return true;
        return value < node.value
            ? this.searchNode(node.left, value)
            : this.searchNode(node.right, value);
    }

    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: AVLNode | null, value: number): AVLNode | null {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (!node.left || !node.right) {
                const temp = node.left ? node.left : node.right;
                if (!temp) {
                    return null;
                } else {
                    return temp;
                }
            } else {
                const minNode = this.minValueNode(node.right);
                node.value = minNode.value;
                node.right = this.deleteNode(node.right, minNode.value);
            }
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        return this.balanceNode(node);
    }

    private minValueNode(node: AVLNode): AVLNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}
