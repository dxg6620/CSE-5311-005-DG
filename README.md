
```javascript
function x = f(n)
   x = 1;
   for i = 1:n
        for j = 1:n
             x = x + 1;
```
1. Find the runtime of the algorithm mathematically (I should see summations).

## Step-by-Step Analysis:

### 1. **Initialization Step**
- The statement `x = 1;` is executed **once** before the loops begin.
- The cost of this step is a constant, denoted by `c1 = 1`.

### 2. **Outer Loop (`i = 1` to `n`)**
- The outer loop runs **`n` times**. For each iteration of the outer loop (indexed by `i`), the inner loop is executed once.

### 3. **Inner Loop (`j = 1` to `n`)**
- The inner loop runs **`n` times** for each iteration of the outer loop. Therefore, for each value of `i`, the statement inside the inner loop will be executed `n` times.

### 4. **Statement Inside the Inner Loop**
- The statement `x = x + 1;` is executed **once** for each iteration of the inner loop. Therefore, for each of the `n` iterations of the outer loop, the statement `x = x + 1;` is executed `n` times.

---

## Summation Analysis:

We want to calculate the **total number of executions** of the statement `x = x + 1;`.

Let `T(n)` represent the total number of times the statement `x = x + 1;` is executed.

Since the inner statement executes once for every pair of `(i, j)`, the total number of executions is represented by a **double summation**:

\[
T(n)=i=1∑n​j=1∑n​1
\]

### Evaluating the Inner Summation:
The inner summation (over `j`) is independent of `i`, and since the summation over `j` runs from 1 to `n`, the result is:

\[
\∑n​1=n
\]

### Evaluating the Outer Summation:
Now substitute the result of the inner summation into the outer summation. We get:

\[
T(n)=i=1∑n​n
\]

This means that for each of the `n` iterations of the outer loop, the inner loop contributes `n` executions of the statement. Therefore:

\[
T(n)=n×n=n
\]

---

## Final Result:

Thus, the total number of executions of the statement `x = x + 1;` is \( n^2 \). Including the initialization step (`x = 1`), the total runtime is:

\[
T(n) = 1 + n^2
\]

However, in asymptotic analysis, constant terms (like the `1` in this case) are insignificant compared to terms that grow with `n`. Therefore, the runtime of the algorithm is dominated by \( n^2 \). The **time complexity** of the algorithm is:

\[
T(n)=O(n2)\]

---
