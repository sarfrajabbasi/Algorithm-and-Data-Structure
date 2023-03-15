// constant run time example:--

const tenItems = new Array(10).fill('foo');
const millionItems = new Array(1000000).fill('bar');
var arr  = Array.from(new Array(1000).fill(1));

function getMidOfArr(arr){
    return arr[Math.floor(arr.length/2)];
}


// log:--

console.log(getMidOfArr(arr));

function return1stElem(arr){
    return arr[0];



}
// log:--
//same amount of time in both case
console.log(return1stElem(tenItems));
console.log(return1stElem(millionItems));

function printOnly1st5(arr){
    for(let i=0;i<5;i++){
        console.log('element:',arr[i]);
    }
}
//log:--

printOnly1st5(arr)

// Picking a value from an object via it’s key:--

const todaysMenu = {
    breakfast: 'Smoothie',
    lunch: 'Sallad',
    dinner: 'Sushi',
  };

  function whatIsTheMenu(menu,type){
    console.log( menu[type])
  }

  whatIsTheMenu(todaysMenu,"breakfast")//smoothie

  //   functions:---

function addTen(n){
    return n+10
}

console.log(addTen(10));//20
console.log(addTen(1000000));//1000010

function isEvenOrOdd(n){
    return n%2 ? "Odd":"Even";
}

console.log(isEvenOrOdd(10));// Even
console.log(isEvenOrOdd(10001));// odd
