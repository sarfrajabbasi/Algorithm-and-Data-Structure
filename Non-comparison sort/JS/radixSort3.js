// Helper Functions :-----
const nums2 = [22,54,18,29,69,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];
//  get digit:---
/*
--> numbers = 1391;
--> place (index) =0;
--> longestNumber = 4;
*/

function getDigit(number,place,longestNumber){
    /*
    Number:- 20
     place:- 3
    LongestNum:- 4
     */
    const string = number.toString();
    const size = string.length;
    const mod = longestNumber -size;

    // get back spacific digtit that i.m looking for 
    console.log("mod:--",mod)
    console.log("digit:-",string[place-mod])
    return string[place-mod] || 0;
}


// getLongest number :------

function getlongestNum(arr){
    let longest = 0;

    for(let i=0;i<arr.length;i++){
        const currentLength = arr[i].toString().length;

        // if current length is  longest the current retrun otherwise longest.0,1,2,3,4;

        longest = currentLength > longest ? currentLength : longest;

    }

    return longest
}

// RadixSort:---

function radixSort(arr){

    // find longest number
    const longestNum = getlongestNum(arr)

    // create how many bucket you need and arrays of 10 arrays fill with brand new empty arrays 10;

    const buckets = new Array(10).fill().map(e=>[]);
    // console.log(buckets);

    // iteraiton based on longestNumber 4-1= 3,2,1,0
    for(let i=longestNum-1;i>=0;i--){
        // while loop
        while(arr.length){
            //arr ki first value nikal kr buckets me add kr rhe ha acc. to digit:---
            const current = arr.shift();
            console.log("place:-",i);
            console.log("Number:-",current);
            console.log("LongestNum:-",longestNum);
            // This going to push last number acc. 0 to 9 and 10 and 100 and push it into buckets in there spot

            // enqueue the number into their buckets(in)
            buckets[getDigit(current,i,longestNum)].push(current)
            // console.log(buckets)
        }
        
        // for-loop for each buckets(out):--
        for(let j=0;j<10;j++){
            // arr ki value ko wapse buckets se arr me push krwa rahe h.
            // where you dequeue all of the results
            while(buckets[j].length){
                // push them onto array
                arr.push(buckets[j].shift());
                // console.log(arr)
            }
        }
    }
    return arr
}
const nums = [20,51,3,801,415,62,4,17,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];

// radixSort(nums2);


// my radix-Sort:--

// Helper func:--
// getDigit:--
function getDigit1(number,place,longestN){
    const string = number.toString();
    const size = string.length;
    const mod  = longestN-size;

    return string[place-mod] || 0

}
// getlongestNum:--
function getlongestN(arr){
    let longest =0;
    for(let i=0;i<arr.length;i++){
        const currentLength = arr[i].toString().length;
         longest = currentLength > longest ? currentLength  :longest;

    }

    return longest
}

function radixS(arr){
    // longest number
    const longestNum = getlongestN(arr);

    // create buckets:---
    
    const buckets = new Array(10).fill().map(e=>[]);

    for(let i=longestNum-1;i>=0;i--){
        while(arr.length){
            const current = arr.shift();
            // enqueue the buckets with current value of arr
            buckets[getDigit1(current,i,longestNum)].push(current)
            // console.log(buckets);

        }

        for(let j=0;j<10;j++){
            // dequeue
            while(buckets[j].length){
                arr.push(buckets[j].shift())
            }
        }
        
    }
    return arr
}

const nums1 = [22,54,18,29,69,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];

console.log(radixS(nums1))
