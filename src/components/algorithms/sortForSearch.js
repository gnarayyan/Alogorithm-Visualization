
export function quickSort(array) { 
   let swap = (arr, i, j) => {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

  let partition = (arr, low, high) => {
    let q = low, i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q++;
        }
    }
    swap(arr, i, q);
    return q;
  }

let quick = (arr, low, high) => {

    if (low < high) {
        let pivot = partition(arr, low, high);
        quick(arr, low, pivot - 1);
        quick(arr, pivot + 1, high);
        return arr;
      }
    }

let low = 0;
let high = array.length-1;

return quick(array, low, high);
}