# Hands on 9 implementation

```ts
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
```

const hashTable = new HashTable(4); // Start with a smaller size to demonstrate resizing quickly

// Scenario 1: Basic Insertions and Retrievals using the Multiplication and Division method
console.log("---- Scenario 1: Basic Insertions and Retrievals ----");
hashTable.set(1, 100);
hashTable.set(2, 200);
hashTable.set(3, 300);
console.log("Get 1:", hashTable.get(1));
console.log("Get 2:", hashTable.get(2)); 
console.log("Get 3:", hashTable.get(3));

// Scenario 2: Collision Handling
console.log("\n---- Scenario 2: Collision Handling ----");
hashTable.set(10, 1000);
hashTable.set(18, 1800);
console.log("Get 10 (collision case):", hashTable.get(10)); 
console.log("Get 18 (collision case):", hashTable.get(18));

// Scenario 3: Resizing (Doubling the Size)
console.log("\n---- Scenario 3: Resizing (Doubling the Size) ----");
hashTable.set(4, 400);
console.log("Array should resize now.");
hashTable.set(5, 500); 
console.log("Get 1 after resizing:", hashTable.get(1));
console.log("Get 2 after resizing:", hashTable.get(2));
console.log("Get 4 after resizing:", hashTable.get(4)); 
console.log("Get 5 after resizing:", hashTable.get(5));

// Scenario 4: Shrinking (Halving the Size)
console.log("\n---- Scenario 4: Shrinking (Halving the Size) ----");
hashTable.remove(1);
hashTable.remove(2);
hashTable.remove(3);
console.log("Get 4 after shrinking:", hashTable.get(4));
console.log("Get 1 after removal:", hashTable.get(1));

// Scenario 5: Multiple Insertions and Resizing Again
console.log("\n---- Scenario 5: Multiple Insertions and Resizing Again ----");
hashTable.set(6, 600);
hashTable.set(7, 700);
hashTable.set(8, 800);
hashTable.set(9, 900);
console.log("Get 6:", hashTable.get(6));
console.log("Get 7:", hashTable.get(7));
console.log("Get 8:", hashTable.get(8)); 
console.log("Get 9:", hashTable.get(9));


    "---- Scenario 1: Basic Insertions and Retrievals ----"
    "Get 1:", 100
    "Get 2:", 200
    "Get 3:", 300
    "
    ---- Scenario 2: Collision Handling ----"
    "Get 10 (collision case):", 1000
    "Get 18 (collision case):", 1800
    "
    ---- Scenario 3: Resizing (Doubling the Size) ----"
    "Array should resize now."
    "Get 1 after resizing:", 100
    "Get 2 after resizing:", 200
    "Get 4 after resizing:", 400
    "Get 5 after resizing:", 500
    "
    ---- Scenario 4: Shrinking (Halving the Size) ----"
    "Get 4 after shrinking:", 400
    "Get 1 after removal:", null
    "
    ---- Scenario 5: Multiple Insertions and Resizing Again ----"
    "Get 6:", 600
    "Get 7:", 700
    "Get 8:", 800
    "Get 9:", 900

