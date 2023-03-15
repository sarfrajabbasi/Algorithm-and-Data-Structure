// Quadratic run time :-- O(n^2)-> nested loop

function makeTouples(input){
    var ans = [];
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input.length;j++){
            ans.push([input[i],input[j]])
        }
    }
    return ans
}
console.log(makeTouples([1,2,3,4,5]));



const fruits = ["apple", "strawberry", "watermelon"];


function logAllPairs(arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        console.log(`${arr[i]} ${arr[j]}`);
    }
}
}

let a = performance.now()
logAllPairs(fruits)
 let b = performance.now()
console.log(b-a);
// 3 * 3 or 3 to the power of 2.