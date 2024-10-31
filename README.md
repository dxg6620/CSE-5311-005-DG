
### Dynamic Array
```ts
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
```

### Chapter 17: Solution

1. **a) Aggregate Method**
   - The table doubles in size when it runs out of space.
   - If the original size is 1, after insertion it doubles to size 2, after one more insertion it doubles to size 4, and so on.
   - In general, after \( k \) doublings, the size is \( 2^k \).

   **Pseudocode:**
   ```
   Initialize table with capacity = 1

   for i = 1 to n:
       if table is full:
           new_table = create new table with size 2 * current size
           copy elements from old table to new_table
           table = new_table
       
       insert element i into table
   ```

   - Let k=log⁡(n+1)−1k=log(n+1)−1.
   - Total cost = O(n) * k = O(nlog⁡n)
   - Amortized cost per insertion = O(log⁡n).
   - Runtime per insertion is O(log⁡n).
   - Total time is O(n) * log⁡(n+1)

---

2. **b) Accounting Method**
   - Charge 2 units for each insertion.
   - When the table doubles from m to 2m, credit m units.
   - The credit exactly pays for the copy cost of O(m).
   - Total credits = m + 2m + 4m + ....+ n/2 * m = O(n)

   **Pseudocode:**
   ```
   Initialize table with capacity = 1

   for i = 1 to n:
       if table is full:
           new_table = create new table with size 2 * current size
           copy elements from old table to new_table
           table = new_table
       
       insert element i into table

   Initialize charge = 0
   Initialize credit = 0

   for i = 1 to n:
       charge += 2
       if table doubled in size from m to 2m:
           credit += m
   ```

   - Total charges = 2*n = O(n).
   - Total credits = m + 2m + 4m + ....+ n/2 * m = O(n)
   - Amortized cost per insertion = Total/n => O(n)/n => O(1).
   - Runtime per insertion = O(1).
   - Total time = O(n).
