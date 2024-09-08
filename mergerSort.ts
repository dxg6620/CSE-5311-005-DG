function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
    }

    const mid: number = Math.floor(arr.length / 2);
    const left: T[] = arr.slice(0, mid);
    const right: T[] = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
    let result: T[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array: number[] = [38, 27, 43, 3, 9, 82, 10];
const sortedArray: number[] = mergeSort(array);
console.log(sortedArray);
