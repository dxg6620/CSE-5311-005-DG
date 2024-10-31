
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

   - Let \( k = \log(n+1) - 1 \).
   - Total cost = \( O(n) + k = O(n \log n) \).
   - Amortized cost per insertion = \( O(\log n) \).
   - Runtime per insertion is \( O(\log n) \).
   - Total time is \( O(n \log (n+1)) \).

---

2. **b) Accounting Method**
   - Charge 3 units for each insertion.
   - When the table doubles in size from \( m \) to \( 2m \), credit \( m \) units.
   - The credit exactly pays for the copy cost of \( O(m) \).
   - Total credit = \( m + 3m + \ldots + 7/8 m = O(n) \).

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
       charge += 3
       if table doubled in size from m to 2m:
           credit += m
   ```

   - Total charges = \( 3n = O(n) \).
   - Amortized cost per insertion = \( O(1) \).
   - Runtime per insertion = \( O(1) \).
   - Total time = \( O(n) \).
