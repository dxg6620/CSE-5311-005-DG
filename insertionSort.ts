const insertionSort = (arr ? : number[]): number[] | void => {

  if (!arr) {
    return;
  }

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      let swapValue = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > swapValue) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = swapValue;
    }
    return arr;
  } else {
    return arr;
  }
};

console.log(insertionSort([10, 20, -1, 2, 1, 5, 5, 10])
