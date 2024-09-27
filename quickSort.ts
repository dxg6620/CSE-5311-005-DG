
function quicksortRandom(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = arr.filter((x) => x < pivot);
    const middle = arr.filter((x) => x === pivot);
    const right = arr.filter((x) => x > pivot);

    return [...quicksortRandom(left), ...middle, ...quicksortRandom(right)];
}

function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter((x) => x < pivot);
    const middle = arr.filter((x) => x === pivot);
    const right = arr.filter((x) => x > pivot);

    return [...quicksort(left), ...middle, ...quicksort(right)];
}


function generateSortedArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
}

function generateReverseSortedArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => n - i);
}

function generateRandomArray(n: number): number[] {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n));
}

function benchmarkQuickSort() {
    const sizes = [100, 1000, 10000, 100000];
    const results = {
        Best: [] as number[],
        Worst: [] as number[],
        Average: [] as number[],
        Sizes: sizes
    };

    sizes.forEach((n) => {
        const sortedArray = generateSortedArray(n);
        const reverseSortedArray = generateReverseSortedArray(n);
        const randomArray = generateRandomArray(n);

        // Best case (already sorted)
        const startBest = performance.now();
        quicksort([...sortedArray]);
        const endBest = performance.now();
        results.Best.push(endBest - startBest);
        console.log(`Best Case (n=${n}): ${endBest - startBest}ms`);

        // Worst case (reverse sorted)
        const startWorst = performance.now();
        quicksort([...reverseSortedArray]);
        const endWorst = performance.now();
        results.Worst.push(endWorst - startWorst);
        console.log(`Worst Case (n=${n}): ${endWorst - startWorst}ms`);

        // Average case (random)
        const startAvg = performance.now();
        quicksort([...randomArray]);
        const endAvg = performance.now();
        results.Average.push(endAvg - startAvg);
        console.log(`Average Case (n=${n}): ${endAvg - startAvg}ms`);
    });

    return results;
}

// Call the benchmark function and log results
const benchmarkResults = benchmarkQuickSort();
