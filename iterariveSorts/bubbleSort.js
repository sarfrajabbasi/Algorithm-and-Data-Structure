/* 
--> Bubble sort works by comparing two adjacent numbers next to each other and then swapping their places if the smaller index's value is larger than the larger index's. Continue looping through until all values are in ascending order.
*/

function bubbleSort(arr){
    var swapped = false;
    do {
        swapped =false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
            const temp = arr[i];
            arr[i]= arr[i+1];
            arr[i+1] = temp
            swapped =true
        }
        }
    }while(swapped)
  return arr
}
var arr = [2,4,5,6,7,797,34]
console.log(bubbleSort(arr));

function bubbleSort(arr){
  var swapped =false;
  do{
    swapped =false;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > arr[i+1]){
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
        swapped = true
      }
    }
  }while(swapped)
  return arr
}

var arr = [7,8,9,5,6,3,4,2,3,1]
console.log(bubbleSort(arr));

 function bubbleS(arr){
  var swapd = true
  function swap(arr,index1,index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  while(swapd){
    swapd =false
   for(let j=0;j<arr.length;j++){
    if(arr[j]>arr[j+1]){
      swap(arr,j,j+1)
      
      swapd =true
    }
   } 

  }
  return arr
 }

var arr = [70,8,9,53,65,37,94,12,33,1]
console.log(bubbleS(arr));

// revverse:---
function bubbleSt(arr){
  function swap(arr,index1,index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
 for(let i=0;i<arr.length;i++){ 
   for(let j=0;j<=i;j++){
    if(arr[i]<arr[j]){
      swap(arr,i,j)
    }
   } 

  }
  return arr
 }

var arr = [70,8,9,53,65,37,94,12,33,1]
console.log(bubbleSt(arr));

// Time-Complexity => O(n^2);
// space-Complexity => O(1);

// Bubble sort is the worst type of sort because it compares every pair possiblewhereas other sorting algorithms take advantage of the presorted parts of the array. Because bubble sort uses nested loops, it has a time complexity of O(n 2 ).
