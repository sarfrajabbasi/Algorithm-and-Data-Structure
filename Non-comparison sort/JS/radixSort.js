
const nums = [20,51,3,801,415,62,4,17,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];

  function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;
    
    const mod = longestNumber - size;

    return string[place - mod] || 0;
  }
  
  function findLongestNumber(array) {
    let longest = 0;

    for (let i = 0; i < array.length; i++) {
      const currentLength = array[i].toString().length;
     
      longest = currentLength > longest ? currentLength : longest;
    }
    return longest;
  }
  
  function radixSort(array) {
    // find longest number 
    const longestNumber = findLongestNumber(array);
    
    // create how many buckets you need
    const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays
    
    //  an array of 10 arrays
    // for loop for how many iterations you need to do
    for (let i = longestNumber - 1; i >= 0; i--) {
      // while loop
      // enqueue(add) the numbers into their buckets
      while (array.length) {
        const current = array.shift();
        buckets[getDigit(current, i, longestNumber)].push(current);
      }
      
      // for loop for each bucket
      // dequeue(rm) all the items out of the bucket
      for (let j = 0; j < 10; j++) {
        while (buckets[j].length) {
          array.push(buckets[j].shift());
        }
      }
    }
  
    return array;
  }
  console.log(radixSort(nums));










  