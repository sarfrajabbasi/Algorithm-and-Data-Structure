// recursion :--A recursive function is a function that calls itself.

// Simple:--
function countTo(max,current,list){
    if(current > max)return;

    console.log(current);
    list.push(current)
   countTo(max,current+1,list);

}

var arr = []
const counts =  countTo(8,1,arr);
console.log(arr);

// fibonacci:---O(2^n)
function fibonacci(n){
    // base case

    if(n ===2 || n===1){
        return 1;
    }else if(n<=0){
        return 0
    }
    // recursive calls
    return fibonacci(n-1)+ fibonacci(n-2)
}

console.log(fibonacci(10))


// factorial:----
// / time complexity Rank : O(n!)factorial;
// 5! = 5*(4*(3*(2*1)))-->
function factorial(n){
    // base case
   if(n<2){
    return 1
   }
   
    // recursive calls
    return n * factorial(n-1)
} 

console.log("fact:-Ans",factorial(5));

// Recursion :- Nested addition Exercise.
// time complexity Rank : O(2^n)exponantial
// pretty good for deep arrays
 function nestRAdd(arr){
    let sum =0;
    // arr = [[1],[2]]
    // current = [1]
     
    for(let i=0;i<arr.length;i++){
        //arr or num
        var current = arr[i]

        // check : isArr or num 
        if(Array.isArray(current)){
            // if is array
            sum += nestRAdd(current)
        }else{
            // if is number
            sum += current
        }

        //return sum
    }

    return sum     
 }
 
console.log("Ans :-", nestRAdd([[10],[10],[10],10,10,10]))
console.log("Ans :-", nestRAdd([[10,[10,[10,[10,10,[10,10,[10,10,[10,10,[10]]]]]]]],[10],[10],[10],[10]]))

// Iterative fs:----
function fibon(n){
    const sequence = [0,1];
    for(let i=2;i<n+1;i++){
        sequence.push(sequence[i-2]+sequence[i-1]);
    }
    return sequence[n]
}

console.log(fibon(10))

