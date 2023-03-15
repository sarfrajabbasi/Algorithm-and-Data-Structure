const lookingFor = { id: 5, name: "Brian" }
;
function linearSearch(id, array) {
    // code goes here
    for(let i=0;i<array.length;i++){
        if(id ===array[i].id ){
            return array[i]
        }
    }
    return 
  }
  
  function binarySearch(id, array) {
    let min =0,max = array.length-1,index,element;

    while(min <= max){
        index = Math.floor((min+max)/2);
        element = array[index]

        // if element is less the what we look id then min + 1
        if(element.id < id){
            min = index + 1
        }else if(element.id > id){
            max = index - 1
        }else{
            return element
        }
    }
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
    
console.log(binarySearch(5, [
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