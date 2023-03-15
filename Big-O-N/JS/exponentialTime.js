//  Exponential time :-- Horrible

// naive solution:--

function fiboRecurive(num){

    if(num==0){
        return 0
    }else if(num ===1){
        return 1
    }else{
        return fiboRecurive(num-1) + fiboRecurive(num-2)
    }
    
}


    // what happen here:--
// FibonacciRecursive(4)= FibonacciRecursive(3) +FibonacciRecursive(2)

// FibonacciRecursive(3)= FibonacciRecursive(2) +FibonacciRecursive(1)

// FibonacciRecursive(2)= FibonacciRecursive(1) +FibonacciRecursive(0)


//Pop out from the stack:-------------

// fibonacciRecursive(2) = 1 + 0 = 1
// fibonacciRecursive(3) = 1 + 1 = 2
// fibonacciRecursive(4) = 1 + 2 = 3


console.log(fiboRecurive(10))
//output :-3