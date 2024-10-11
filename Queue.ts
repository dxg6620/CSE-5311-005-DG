class Queue {
  private arr: Int32Array;
  private front: number;
  private rear: number;
  private maxSize: number;

  constructor(size: number) {
    this.maxSize = size;
    this.arr = new Int32Array(this.maxSize); 
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value: number): void {
    if (this.rear === this.maxSize - 1) {
      throw new Error("Queue overflow");
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.arr[++this.rear] = value;
  }

  dequeue(): number {
    if (this.front === -1 || this.front > this.rear) {
      throw new Error("Queue underflow");
    }
    return this.arr[this.front++];
  }

  isEmpty(): boolean {
    return this.front === -1 || this.front > this.rear;
  }
}
