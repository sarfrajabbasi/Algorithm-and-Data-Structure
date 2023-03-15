/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, and returns removed value.
*/

class ArrayList {
constructor(){
        // instantiate all your variable
        this.data = {};
        this.length = 0;
    }
pushA(value){
// add a item into end of the array
this.data[this.length] = value;
this.length++
}
popA(){
// remove the last item in the array and return 

// return this.delete(this.length-1);

const response = this.data[this.length-1];
delete this.data[this.length-1];
this.length--
return response;
}
getA(index){
// return that item from the array
return this.data[index]
}
deleteA(index){
    // take index removes item from the array and collapse(shift) the array.
    const response = this.data[index];
    this._collapseTo(index);
    return response;
}
_collapseTo(index){
for(let i=0;i<this.length;i++){
    this.data[index] = this.data[index + 1]
}
delete this.data[this.length-1];
this.length--
}
}