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

function findKthSmallestElement() {
  const arr = new Int32Array([12, 3, 5, 7, 19, 26, 1, 4]);
  const k = 4;  // We are looking for the 4th smallest element
  const result = quickSelect(arr, 0, arr.length - 1, k);
  console.log(`${k}th smallest element is ${result}`);
}

findKthSmallestElement();
