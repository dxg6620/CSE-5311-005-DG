function partition(arr: Int32Array, low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
  return i + 1;
}

function quickSelect(arr: Int32Array, low: number, high: number, k: number): number {
  if (low <= high) {
    const pi = partition(arr, low, high);

    if (pi === k - 1) {
      return arr[pi];
    }

    if (pi > k - 1) {
      return quickSelect(arr, low, pi - 1, k);
    }

    return quickSelect(arr, pi + 1, high, k);
  }
  return -1; 
}

function generateRandomArray(size: number): Int32Array {
  const arr = new Int32Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
}

function testMultipleExamples(numExamples: number, arraySize: number) {
  for (let i = 0; i < numExamples; i++) {
    const arr = generateRandomArray(arraySize);
    const k = Math.floor(Math.random() * arraySize) + 1; 
    const result = quickSelect(arr, 0, arr.length - 1, k);
    console.log(`Test Case ${i + 1}:`);
    console.log(`Array: ${arr}`);
    console.log(`${k}th smallest element is ${result}`);
    console.log('---------------------------------');
  }
}

testMultipleExamples(5, 10);
