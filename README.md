# Min Heap Data Structure in TypeScript

## Overview

This project implements a **Min Heap** data structure in TypeScript using bit manipulation operators for calculating parent, left, and right child indices. The heap supports generic types, meaning it can store numbers, strings, or custom data structures.

### Features

- Build a min-heap from an array of elements (`buildMinHeap`).
- Insert elements into the heap (`insert`).
- Remove and return the root node (smallest element) from the heap (`pop`).
- Heapify operations to maintain the heap property after insertion and deletion.
- Generic data type support (e.g., `number`, `string`, custom classes).

```typescript
class MinHeap<T> {
    private heap: T[];

    constructor() {
        this.heap = [];
    }

    private parentIndex(index: number): number {
        return (index - 1) >> 1;
    }

    private leftChildIndex(index: number): number {
        return (index << 1) + 1;
    }

    private rightChildIndex(index: number): number {
        return (index << 1) + 2; 
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    public buildMinHeap(arr: T[]): void {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    private heapifyDown(index: number): void {
        let smallest = index;
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    private heapifyUp(index: number): void {
        let parent = this.parentIndex(index);
        while (index > 0 && this.heap[index] < this.heap[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.parentIndex(index);
        }
    }

    public insert(value: T): void {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    public pop(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        const root = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return root;
    }

    public peek(): T | undefined {
        return this.heap.length === 0 ? undefined : this.heap[0];
    }

    public getHeap(): T[] {
        return this.heap;
    }
}
```
```
const heap = new MinHeap<number>();

// Insert elements
heap.insert(10);
heap.insert(15);
heap.insert(20);
heap.insert(17);
heap.insert(8);

// Log heap after inserting elements
console.log("Heap after inserts:", heap.getHeap());

// Build a heap from an unsorted array
heap.buildMinHeap([30, 25, 40, 5, 10, 15]);

// Log heap after building from array
console.log("Heap after building from array:", heap.getHeap());

// Pop (remove) the root element
console.log("Popped element:", heap.pop());

// Log heap after popping the root
console.log("Heap after pop:", heap.getHeap());

// Peek at the root element
console.log("Peek at root:", heap.peek());

// Log the final heap state
console.log("Final heap:", heap.getHeap());
```

```
Heap after inserts: [8, 10, 20, 17, 15]
Heap after building from array: [5, 10, 15, 25, 30, 40]
Popped element: 5
Heap after pop: [10, 25, 15, 40, 30]
Peek at root: 10
Final heap: [10, 25, 15, 40, 30]
```
