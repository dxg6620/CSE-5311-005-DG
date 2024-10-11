class Node {
  data: number;
  next: number | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  private nodes: Array<Node>;
  private head: number | null;
  private size: number;
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.nodes = new Array<Node>(this.maxSize);
    this.head = null;
    this.size = 0;
  }

  insertAtEnd(value: number): void {
    if (this.size === this.maxSize) {
      throw new Error("Linked list overflow");
    }
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.size;
      this.nodes[this.head] = newNode;
    } else {
      let current = this.head;
      while (this.nodes[current].next !== null) {
        current = this.nodes[current].next!;
      }
      this.nodes[current].next = this.size;
      this.nodes[this.size] = newNode;
    }
    this.size++;
  }

  deleteAtEnd(): number | null {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    if (this.size === 1) {
      const data = this.nodes[this.head].data;
      this.head = null;
      this.size--;
      return data;
    }

    let current = this.head;
    while (this.nodes[current].next !== null && this.nodes[this.nodes[current].next].next !== null) {
      current = this.nodes[current].next!;
    }

    const data = this.nodes[this.nodes[current].next!].data;
    this.nodes[current].next = null;
    this.size--;
    return data;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}
