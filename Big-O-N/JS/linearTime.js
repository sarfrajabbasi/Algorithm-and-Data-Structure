// linear run time:--

function crossAdd(input){
    var ans = [];

    for(let i=0;i<input.length;i++){
        var goingUp = input[i]
        var goingDown = input[input.length-1-i]//reverse
        ans.push(goingUp + goingDown)
    }
    return ans
}
// log:--
console.log(crossAdd([1,2,3,4,5]));

function find(needle,haystack){
    for(let i=0; i<haystack.length;i++){
        if(haystack[i] ===  needle){
            return true
        }
    }

}

// log:--

console.log(find(3,[1,2,3,4,5]));


const exp = [1,2,3,4,5,6,7];

 function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log('element',arr[i]);
    }
 }
 printArray(exp);

 const tenItems = new Array(10).fill('foo');
const millionItems = new Array(1000000).fill('bar');


const tenTimes =new Array(10).fill('foo');
const hundredItems = new Array(100).fill('bar');

function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log('element:',arr[i]);
    }
}

printArray(tenTimes);
// this will take 10 times longer than iterating tenItems array
 printArray(hundredItems);



