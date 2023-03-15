const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];


// helper Functions:--(utilites)

// get digit:--

function getNum(num,index){
    const strNum = String(num);
    let end = strNum.length-1;
    const foundNum = strNum[end-index];
    return (foundNum == undefined)? 0 :foundNum
   
}

// console.log(getNum(134,0));


 function largestNum(arr){
    let largest = 0;

    arr.forEach(num => {
        const strN = String(num);
        // console.log(strN);
        (strN.length > largest)? largest = strN.length  : largest
    })
    return largest
 }
//  console.log(largestNum([1,2,33,55,666]));


// raduxSort :---

function radixSort(arr){

    let mxlength = largestNum(arr);
    for(let i =0;i<mxlength;i++){
        let buckets =  Array.from({length:10},()=> []);

        for(let j=0;j<arr.length;j++){
            let num = getNum(arr[j],i);

            if(num !== undefined)buckets[num].push(arr[j])
        }
        arr = buckets.flat();
    }

    return arr

}


console.log(radixSort(unsortedArr))
