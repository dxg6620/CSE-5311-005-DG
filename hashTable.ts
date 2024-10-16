class DoublyLinkedListNode {
    key: number;
    value: number;
    prev: DoublyLinkedListNode | null;
    next: DoublyLinkedListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(key: number, value: number) {
        const newNode = new DoublyLinkedListNode(key, value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    remove(key: number): boolean {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;
                if (current === this.head) this.head = current.next;
                if (current === this.tail) this.tail = current.prev;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(key: number): number | null {
        let current = this.head;
        while (current) {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return null;
    }
}

class HashTable {
    private arraySize: number;
    private count: number;
    private A: number; 
    private buckets: (DoublyLinkedList | null)[];

    constructor(size: number = 8) {
        this.arraySize = size;
        this.count = 0;
        this.A = (Math.sqrt(5) - 1) / 2; 
        this.buckets = new Array(size).fill(null);
    }

    private hash(key: number): number {
        const fraction = (key * this.A) % 1;
        return Math.floor(fraction * this.arraySize);
    }

    private resize(newSize: number) {
        const oldBuckets = this.buckets;
        this.buckets = new Array(newSize).fill(null);
        this.arraySize = newSize;
        this.count = 0;

        for (let i = 0; i < oldBuckets.length; i++) {
            const bucket = oldBuckets[i];
            if (bucket) {
                let current = bucket.head;
                while (current) {
                    this.set(current.key, current.value);
                    current = current.next;
                }
            }
        }
    }

    set(key: number, value: number) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new DoublyLinkedList();
        }

        const bucket = this.buckets[index];
        if (bucket?.find(key) !== null) {
            // Update the value if key exists
            bucket.remove(key);
        } else {
            this.count++;
        }

        bucket?.addToTail(key, value);

        if (this.count >= this.arraySize) {
            this.resize(this.arraySize * 2);
        }
    }

    get(key: number): number | null {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        return bucket?.find(key) ?? null;
    }

    remove(key: number) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket && bucket.remove(key)) {
            this.count--;
            if (this.count <= this.arraySize / 4 && this.arraySize > 8) {
                this.resize(Math.floor(this.arraySize / 2));
            }
        }
    }
}
