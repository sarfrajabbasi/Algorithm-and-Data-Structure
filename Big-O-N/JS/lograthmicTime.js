// lograthmic time :-- O(log n);

const tenArray = Array.from(Array(10).keys());
const millionArray = Array.from(Array(1000000).keys())


// O(n):-- Linear- RunTime:---

const linearSearch =(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            return `Found the target : ${target} at index ${i}`;
        }
    }
}
linearSearch(tenArray,5);

function binarySearch(arr,target){
    let startIndex = 0;
    let endndex = arr.length-1;
    while(startIndex <= endndex){
        let pivot = Math.floor((startIndex + endndex)/2);

        if(arr[pivot] === target){
            return `Found the target : ${target} at index ${pivot}`
        }else if(arr[pivot]<target){
            startIndex = pivot+1
        }else{
            endndex = pivot -1
        }
    }
    return undefined
}

let beforeLinear = performance.now();
console.log(linearSearch(tenArray,5))
let afterLinear = performance.now();

let beforeBinary = performance.now();
console.log(binarySearch(tenArray,5))
let afterBinary = performance.now();


console.log('Milliseconds linear search:', afterLinear - beforeLinear);
console.log('Milliseconds binary search:', afterBinary - beforeBinary);

// Result:--
//  Milliseconds linear search: 0
//  Milliseconds binary search: 0.10000000009313226
