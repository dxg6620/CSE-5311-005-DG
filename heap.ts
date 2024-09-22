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

const heap = new MinHeap<number>();
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(8);

console.log("Heap after inserts:", heap.getHeap());

heap.buildMinHeap([20, 15, 30, 8, 10, 5, 3]);

console.log("Heap after building from array:", heap.getHeap());

console.log("Popped element:", heap.pop());

console.log("Heap after pop:", heap.getHeap());
