class Stack {
  private arr: number[];
  private top: number;
  private maxSize: number;

  constructor(size: number) {
    this.maxSize = size;
    this.arr = new Array(this.maxSize);
    this.top = -1;
  }

  push(value: number): void {
    if (this.top === this.maxSize - 1) {
      throw new Error("Stack overflow");
    }
    this.arr[++this.top] = value;
  }

  pop(): number {
    if (this.top === -1) {
      throw new Error("Stack underflow");
    }
    return this.arr[this.top--];
  }

  peek(): number {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.top];
  }

  isEmpty(): boolean {
    return this.top === -1;
  }
}
