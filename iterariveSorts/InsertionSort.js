/**
 Insertion Sort:--

-> Insertion sort works similarly to selection sort by searching the array sequentially and moving the unsorted items into a sorted sublist on the left side of the array. 

 */

var ar1 =  [10,5,1,7,4,3,2];

function sort(arr){
    // two for loop:--
    for(let i=1;i<arr.length;i++){
        // number that we're gonna comparing
    let numToinsert = arr[i]
    // keep track of j so declare it outer side of loop.
    // insert the next thing,
    let j;
    // inner loop go backword to find out where its hould go,
    for( 
        j=i-1;
        arr[j]>numToinsert && j>=0;
        j--
        ){
            //insert
        // move the element backwords(R) in the array.
        arr[j+1]= arr[j]
        // console.log("mright",arr[j+1]);
    
    }
    //insert that number exact(L) correct place
    arr[j+1] = numToinsert
//    console.log("mleft",arr[j+1])
}
return arr
}

var pr1 = performance.now()
console.log(sort(ar1))
var pr2 = performance. now()
console.log(pr2-pr1);

function inserS(arr){
    // current value being compared
    var value;
    var j;
    //  The outer for loop iterates over the array indices.
    //  i --> index into unsorted section
    // j --> index inot sorted section
    for(let i=0;i<arr.length;i++){
        // store the current value coz it may shift later;
        value = arr[i];
        // the inner for loop moves the unsorted items into the sorted sublist on the left side of the array.

        for( j=i-1;arr[j] > value && j >=0 ; j--){
            // Whenever the value in the sorted seciton is greater than the value in the unsorted section,shift all items in the sorted section over by one,this creates space in which to insert the value.

            // bigger shift right
            arr[j+1] = arr[j];
        }
        // smaller shift-left
        arr[j+1] = value
    }
    return arr
}

// Time Complexity: O(n 2 )
// Space Complexity: O(1)

var arr2 = [14,33,27,10,35,40,43,13]
var pr1 = performance.now()
console.log(inserS(arr2))
var pr2 = performance. now()
console.log(pr2-pr1);

function iSort(arr){
    var value,j;

    for(let i=0;i<arr.length;i++){
        value = arr[i];
        // run once for acc. to condition(arr[j]>value && j>-1)
        for(j=i-1;arr[j]>value && j>-1;j--){
            // bigger move to right
            arr[j+1] = arr[j]
        }
        //  smaller move to left
        arr[j+1] = value
    }

}