export function bubbleSort (inputArr,myFuncToSwap) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                myFuncToSwap(j,j+1);

            }
        }
    }
    return inputArr;
};


export function selectionSort(array, myFuncToSwap) { 
    var swap = function(array, firstIndex, secondIndex){
        var temp = array[firstIndex];
        array[firstIndex]  = array[secondIndex];
        array[secondIndex] = temp;
        myFuncToSwap(firstIndex, secondIndex);
    }

    var selection = function(array){
        for(var i = 0; i < array.length; i++){
            //set min to the current iteration of i
            var min = i;
            for(var j = i+1; j < array.length; j++){
                if(array[j] < array[min]){
                min = j;
                }
            }
        swap(array, i, min);
        }
        return array;
}
return selection(array)


}


export function quickSort(array, myFuncToSwap) { 
   let swap = (arr, i, j) => {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      myFuncToSwap(i,j);
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


export function heapSort(array, myFuncToSwap){

  var array_length;
  /* to create MAX  array */  
  function heap_root(input, i) {
      var left = 2 * i + 1;
      var right = 2 * i + 2;
      var max = i;

      if (left < array_length && input[left] > input[max]) {
          max = left;
      }

      if (right < array_length && input[right] > input[max])     {
          max = right;
      }

      if (max != i) {
          swap(input, i, max);
          heap_root(input, max);
      }
  }

  function swap(input, index_A, index_B) {
      var temp = input[index_A];

      input[index_A] = input[index_B];
      input[index_B] = temp;
      myFuncToSwap(index_A, index_B);
  }

  function heap(input) {
      
      array_length = input.length;

      for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
          heap_root(input, i);
        }

      for (i = input.length - 1; i > 0; i--) {
          swap(input, 0, i);
          array_length--;
        
        
          heap_root(input, 0);
      }
      return input;
  }

  return heap(array);
}




export function insertionSort(array, myFuncToSwap){

  function swap (arr, index1, index2){
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      myFuncToSwap(index1, index2);
  }

  function insertion(arr){
    let beginningIndex = 0;
    let currentIndex = 1;
    //while the start of the unsorted portion doesnt not start at the after the end of the array
    while(currentIndex < arr.length){
        //while the currentIndex does not reach the end of the sorted section or the array (index of -1)
        while(currentIndex > 0){
            //get currentValue(value to be sorted)
            let currentVal = arr[currentIndex];
            //if it is lesser than the last value, swap the two values, otherwise, break out of the loop
            if(currentVal <= arr[currentIndex - 1]){
                swap(arr, currentIndex, currentIndex - 1);
                currentIndex--;
            } else{
                break;
            }
        
        }
        //add 1 to beginningIndex to account for newly sorted section
        beginningIndex++;
        //start sorting from index after beginning
        currentIndex = beginningIndex + 1;

    }

    return arr;
  }

  return insertion(array);
  
}

