export const bubbleSort = (arr: number[]): number[] => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

export const insertionSort = (arr  : number[])  => {

    if (!arr) {
      return [];
    }
  else{
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
    }}
  };

  export const selectionSort = (arr: number[]): number[] =>{
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
