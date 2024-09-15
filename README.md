## Problem 0
Implement the Fibonacci sequence

```typescript
function fib(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const result = fib(5);
console.log(`fib(5) = ${result}`);
```

Step-by-Step Breakdown (Call Stack) for fib(5)

    fib(5):
        Calls fib(4) and fib(3)

    fib(4):
        Calls fib(3) and fib(2)

    fib(3):
        Calls fib(2) and fib(1)

    fib(2):
        Calls fib(1) and fib(0)

    fib(1):
        Returns 1 (base case)

    fib(0):
        Returns 0 (base case)

    Return to fib(2):
        fib(2) = fib(1) + fib(0) = 1 + 0 = 1

    Return to fib(3):
        Calls fib(1) (again)

    fib(1):
        Returns 1 (base case)

    Return to fib(3):

    fib(3) = fib(2) + fib(1) = 1 + 1 = 2

    Return to fib(4):

    Calls fib(2) (again)

    fib(2):

    Calls fib(1) and fib(0)

    fib(1):

    Returns 1 (base case)

    fib(0):

    Returns 0 (base case)

    Return to fib(2):

    fib(2) = fib(1) + fib(0) = 1 + 0 = 1

    Return to fib(4):

    fib(4) = fib(3) + fib(2) = 2 + 1 = 3

    Return to fib(5):

    Calls fib(3) (again)

    fib(3):

    Calls fib(2) and fib(1)

    fib(2):

    Calls fib(1) and fib(0)

    fib(1):

    Returns 1 (base case)

    fib(0):

    Returns 0 (base case)

    Return to fib(2):

    fib(2) = fib(1) + fib(0) = 1 + 0 = 1

    Return to fib(3):

    Calls fib(1)

    fib(1):

    Returns 1 (base case)

    Return to fib(3):

    fib(3) = fib(2) + fib(1) = 1 + 1 = 2

    Return to fib(5):

    fib(5) = fib(4) + fib(3) = 3 + 2 = 5

For the following two problems:

    1. Implement the solutions and upload it to github

    2. Prove the time complexity of the algorithms

    3. Comment on way's you could improve your implementation (you don't need to do it just discuss it)

## Problem 1

```typescript
function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(`Sorted array: ${sortedArray}`);

```

### Time Complexity

1. **Divide**:
   - Splitting the array takes O(1) time.

2. **Conquer**:
   - Recursively sorting each half creates a recursion tree with a depth of log <sub>2</sub>​n.

3. **Combine**:
   - Merging two halves takes O(n) time at each level of recursion.

**Total Time Complexity**:
- Merging at each level costs O(n).
- There are log<sub>2</sub> n  levels.

Thus, the total time complexity is:
T(n) = O(nlog n)

### Improvement 
To improve the Merge Sort algorithm, you can use a priority queue (min-heap) to merge multiple sorted arrays more efficiently. Instead of merging two arrays at a time, you push the first element of each sorted array into the heap. Then, repeatedly extract the smallest element from the heap, add it to the result array, and push the next element from the same array into the heap. This method speeds up the merging process when dealing with multiple sorted arrays.



## Problem 2
```typescript
function removeDuplicates(array: number[]): number[] {
    if (array.length === 0) return [];

    let uniqueIndex = 0; // Index to place the next unique element

    // Iterate through the array
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[uniqueIndex]) {
            uniqueIndex++;
            array[uniqueIndex] = array[i];
        }
    }

    // Slice the array to include only the unique elements
    return array.slice(0, uniqueIndex + 1);
}

// Example usage
const array1 = [2, 2, 2, 2, 2];
const array2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];

console.log(removeDuplicates(array1)); // Output: [2]
console.log(removeDuplicates(array2)); // Output: [1, 2, 3, 4, 5]

```
###Time Complexity

 - Iteration: Looping through the array takes O(n)O(n) time.
 - Slicing: Removing duplicates and slicing the array takes O(n)O(n) time.

Total Time Complexity:
T(n)=O(n)
T(n)=O(n)

###Improvement
Improvements to the implementation could include modifying the array in place to avoid slicing, thereby saving memory by not creating a new array and instead returning the length of the unique part. Additionally, you could consider adding logic for early termination if duplicates are no longer encountered, although this might have minimal impact due to the array already being sorted.


