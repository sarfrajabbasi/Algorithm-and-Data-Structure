/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
    // code
    array =createMaxHeap(array)
    for(let i =array.length-1;i>0;i--){
        // swap  the last and first index
        swapPlace(0,i,array);
        heapify(array,0,i)
    }
    return array;
  };
  
//   loop over array and call heapify in reverse order.
  const createMaxHeap = (array) => {
    // code
    for(let i=Math.floor(array.length/2);i>=0;i--){
        heapify(array,i,array.length)
    }
    return array;

  };
  const swapPlace = (index1,index2,array) =>{
    // swap two item in an array
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp
    return array
  }

  // check value in right palce and it bigger than it' children or notand swap them acc.
//   recursive
  const heapify = (array, index, heapSize) => {
    let largestValueIndex = index
    // code
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    if(heapSize >left && array[largestValueIndex] < array[left]){
        largestValueIndex = left
    }
    if(heapSize >right && array[largestValueIndex] < array[right]){
        largestValueIndex = right
    }
    if(largestValueIndex !== index){
        swapPlace(index,largestValueIndex,array)
        heapify(array,largestValueIndex,heapSize)
    }
  };
  
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  console.log(heapSort(nums));