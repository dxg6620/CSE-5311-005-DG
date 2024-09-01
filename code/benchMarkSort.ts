import { performance } from 'perf_hooks';
import { bubbleSort, insertionSort, selectionSort } from './sortingAlgorithms';

function benchmarkSortAlgorithm(algorithm: (arr: number[]) => number[], inputSizes: number[]): { [key: number]: number } {
  const results: { [key: number]: number } = {};

  for (const size of inputSizes) {
    const array = Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
    const start = performance.now();
    algorithm([...array]);
    const end = performance.now();
    results[size] = end - start;
  }

  return results;
}

const inputSizes = [5, 10, 20, 50, 100, 500, 1000, 5000, 10000, 100000];

const selectionSortResults = benchmarkSortAlgorithm(selectionSort, inputSizes);
const bubbleSortResults = benchmarkSortAlgorithm(bubbleSort, inputSizes);
const insertionSortResults = benchmarkSortAlgorithm(insertionSort, inputSizes);

console.log('Selection Sort:', selectionSortResults);
console.log('Bubble Sort:', bubbleSortResults);
console.log('Insertion Sort:', insertionSortResults);
