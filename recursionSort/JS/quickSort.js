
function quickSort(nums){
  // base case ,array of length 0 or 1
  if(nums.length <=1){
    return nums;
  } 
  // choose pivot
const pivot = nums.pop();

  // separate into left and right arrays
const left  =[];
const right  =[];
 for(let i of nums){
  if(i<pivot){
    left.push(i)
  console.log(left);
  }else{
    right.push(i)
    console.log(right)
  }
 }
 console.log( ":-",pivot);
 console.log(left,right
  );
  // call quickSorts on left and right arrays

// const sortedLeft = quickSort(left)//[3,4]
// const sortedRight = quickSort(right)//[9]

//   return sortedLeft.concat(pivot,sortedRight);
return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,4,2,6,8,5,9]));

function Qs(arr){
  // base case
  if(arr.length <=1){
    return arr
  }
  // pivot
   const pivot = arr[arr.length-1];

  //  separate array left and right
  const left = []
  const right = []
  for(let i=0;i<arr.length-1 ;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  // console.log(left)
  // console.log(right)
    
  // call Qs
  const sortLeft = Qs(left)
  const sortRight = Qs(right)
  return sortLeft.concat(pivot,sortRight);
}

console.log(Qs([1,5,6,7,8,9,4]))

function QS2(arr){
  if(arr.length <=1){
    return arr
  }

  const pivot = arr.pop();
const  left = []
const  right = []
  for(let i=0;i<arr.length;i++){
    //left
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      // right
      right.push(arr[i])
    }
  }

return [...QS2(left),pivot,...QS2(right)]
}

console.log(QS2([2,4,6,5,1,2,8,1 ]));