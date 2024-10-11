class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: Node | null;

  constructor() {
    this.head = null;
  }

  insertAtEnd(value: number): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  deleteAtEnd(): number | null {
    if (this.head === null) {
      throw new Error("List is empty");
    }
    if (this.head.next === null) {
      const data = this.head.data;
      this.head = null;
      return data;
    }
    let temp = this.head;
    while (temp.next && temp.next.next !== null) {
      temp = temp.next;
    }
    const data = temp.next!.data;
    temp.next = null;
    return data;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}
