
// that list si sorted as base case:--

const mergeSort =(arrNum)=>{
// base case,return if length 1 or 0
if(arrNum.length<2){
    return arrNum
}

// break into two smaller arrays list
const length = arrNum.length;
const middle = Math.floor(length/2);
const left = arrNum.slice(0,middle);
const right = arrNum.slice(middle);

// call mergeSort on left and right
const sortedLeft = mergeSort(left);
const sortedRight = mergeSort(right);

// return the merge of left and right
return merge(sortedLeft,sortedRight)

}
const merge = (left,right)=>{
 const result = [];
// stitch them together:--
// it run until all sorted 
 while(left.length && right.length){
    if(left[0] <=right[0]){
        result.push(left.shift());
    }else{
        result.push(right.shift())
    }
 }
//  concat of empty arr nothing
return  result.concat(left,right);

}

// it sort the big data structure and return it to that place where we call it.
var a = performance.now()
console.log(mergeSort([4,5,1,2,3,6,9,8,7]));
var b = performance.now()
console.log(b-a);

function mergeS(arr){
    if(arr.length <2){
        return arr
    }

    const length = arr.length;
    const mid = Math.floor(length/2);
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    // console.log(left,right);


    const sortedLeft = mergeS(left);
    const sortedright = mergeS(right);


     return merge1(sortedLeft,sortedright)
}

function merge1(left,right){
    var result = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())
            // console.log(result);
        }else{
            result.push(right.shift())
            // console.log(result);
        }
    }
    return result.concat(left,right)
}
var a = performance.now()
console.log(mergeS([1,5,7,4,2,3,6]));
var b = performance.now()
console.log(b-a);

function mergeS2(arr){
    if(arr.length <2){
        return arr
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right  = arr.slice(mid);

    return merge3(mergeS2(left),mergeS2(right))
}

function merge3(left,right){
    var result =[],leftIndex=0,rightIndex=0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex++])
        }else{
            result.push(right[rightIndex++])
        }
    }
    var leftRemains = left.slice(leftIndex);
    var rightRemains = right.slice(rightIndex);

    // add remaining to resultant array
    return result.concat(leftRemains,rightRemains);
}
var a = performance.now()
console.log(mergeS2([1,5,7,4,2,3,6]));
var b = performance.now()
console.log(b-a);

