// _______________________________:---------

  
// Hellper functions:---------
  //  getDigit
  // numbers = 1391,place (index)=0,longestNumber = 4 
  // return 1
  function getDigit(number,place,longestNumber){
    const string = number.toString();
    const size = string.length;
    const mod = longestNumber -  size;
    
    // get back spacific digit that i'm looking for
    // console.table({string,size,mod,longestNumber});
    
    // last digit--> 
    return string[place-mod] || 0
    
    }
    
    function getlongestNum(array){
    let longest = 0;
    
    for(let i=0;i<array.length;i++){
      const currentLength = array[i].toString().length;
      // if current length is longest the current return otherwise longest.0,1,2,3,4..
      longest = currentLength > longest ? currentLength :longest
    
    
    }
    return longest
    }
    
    
    function radixSort(array){
    // find longest number
    const longestNum = getlongestNum(array);
    
    // create howmany bucket you need
    // an arrays of 10 arrays
    // fill with brand new empty arrays(10)
    const buckets = new Array(10).fill().map((e)=>[])
    // for loop for how many iteration you need to do (based on longest number)
    // 4-1=3,2,1,0

    // (0)--> 0 to 9
    // (1)--> 10
    // (2)--> 100
    // (3)--> 1000
    for(let i=longestNum-1;i>=0;i--){
      // while loop(pushing value)
      while(array.length){
        
        const current = array.shift();
        // this gonna push last number acc 0 to 9 and then 10 and 100 and push it into four spot ,the four buckets
        //  enqueue the numbers into their buckets
       buckets[getDigit(current,i,longestNum)].push(current)
        
      }
  
      // (0)--> 0 to 9
    // (1)--> 10
    // (2)--> 100
    // (3)--> 1000
      // for loop for each bucket 
      for(let j =0;j<10;j++){
        // where you dequeue all of the results
        while(buckets[j].length){
          // push them back into the array array
          array.push(buckets[j].shift())
        }
      }
    }
    return array
    }

    const nums = [20,51,3,801,415,62,4,17,19,11,1,100,1244,104,944,854,34,3000,3001,1200,633];

    console.log(radixSort(nums));