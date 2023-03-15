
const lookingFor = { id: 5, name: "Brian" }
const lookingFor2 = { id: 23, name: "sarfraj" }
;
function linearSearch(id, array) {
    // code goes here
    for(let i=0;i<array.length;i++){
        if(id === array[i].id){
            return array[i]
        }
    }
    return 
    
  }
  
  function binarySearch(id, array) {
    let min =0, max=array.length-1,index,element

    while ((min <= max)) {
        index = Math.floor( (min+max) / 2);
        element = array[index];
        // if element.id is greater then id
        if(element.id  < id){
            // then min is = i +1
            // set min to 1 greater

            min =index+1
        }else if(element.id > id){
            // so if the elemnt.id  we looking at is greater than id
            // max is decrease
            max = index-1
        }else{
            // found
            return element
        }
        
    }
    // not found id
    return 
  }

console.log(linearSearch(5, [
    { id: 1, name: "Sam" },
    { id: 11, name: "Sarah" },
    { id: 21, name: "John" },
    { id: 10, name: "Burke" },
    { id: 13, name: "Simona" },
    { id: 31, name: "Asim" },
    { id: 6, name: "Niki" },
    { id: 19, name: "Aysegul" },
    { id: 25, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 2, name: "Marc" },
    { id: 51, name: "Chris" },
    lookingFor,
    { id: 14, name: "Ben" }
  ]))
  
console.log(binarySearch(23, [
    { id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" },
    lookingFor2,
    { id: 24, name: "Ben" }
  ]))