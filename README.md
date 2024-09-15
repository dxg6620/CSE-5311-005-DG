## Problem 0

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
