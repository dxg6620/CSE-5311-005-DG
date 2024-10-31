class DynamicArray {
  private arr: number[];
  private capacity: number;
  private length: number;  

  constructor(initialCapacity = 4) {
    this.capacity = initialCapacity;
    this.arr = new Array(this.capacity).fill(0);
    this.length = 0;
  }

  public push(value: number): void {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.arr[this.length] = value;
    this.length++;
  }

  public pop(): number | null {
    if (this.length === 0) {
      return null;
    }
    const value = this.arr[this.length - 1];
    this.length--;
    return value;
  }

  public get(index: number): number | null {
    if (index < 0 || index >= this.length) {
      return null;s
    }
    return this.arr[index];
  }

  public size(): number {
    return this.length;
  }

  private resize(): void {
    this.capacity *= 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr; 
  }
}
