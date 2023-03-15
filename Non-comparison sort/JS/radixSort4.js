// helper functions:---
function getDigit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10
}

// digitCOunt
function digitCount (num){
    if(num ==0)return 1;

    return Math.floor(Math.log10(Math.abs(num))) +1
}
// console.log(digitCount(0));//1
// console.log(digitCount(21));//2
// console.log(digitCount(3242));//4

// mostDigit:--

function mostDigit(nums){
    let maxDigits =0;

    for(let i=0;i<nums.length;i++){

        maxDigits = Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits
}

// console.log(mostDigit([22,33,55,663]));

function radixSort(arr){
    // large digit
    let maxDigitCount = mostDigit(arr);

    // 4 time sort acc to bucket and digit
    for(let i=0;i<maxDigitCount;i++){
        // buckets
        let digitBuckets = Array.from({length :10},()=>[]);
        // console.log(digitBuckets);
        for(let j=0;j<arr.length;j++){
            //  number and space
            let digit = getDigit(arr[j],i)

            digitBuckets[digit].push(arr[j])
            // console.log(digitBuckets);
        }

        // new order after each loop;

        arr = [].concat(...digitBuckets);
    }
    return arr
}

console.log(radixSort([1, 33, 444, 0, 3, 2,345,35 ,8,2,45]));

/*
--> Time-complexity:--

Radix Sort best case: O(k * n)

Radix Sort worst case: O(k * n)

Radix Sort average case: O(k * n)

-->Space complexity of Radix Sort =O(n + d)

*/