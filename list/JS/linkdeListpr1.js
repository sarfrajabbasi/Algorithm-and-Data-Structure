// LinkedList:--

/*
---> LinkedList is made by making node that have two properties, the value that's being stored and a pointer to the next node in the list.

--> the likedlist then keep track of the head and usually the tail ,keep track of the tail becouse it makes pop really easy 

--> Array list and linked list ,the interface of two are exactly same and should make no difference to the cosumer of the data structure.

* length(integer)-- How many elements in the list;
* push-- accept a value and adds to the end of the list.
* pop -- removes the last value in the list and returns it
* Get -- accepts an index and returns the value at that position
* delete -- accepts an index , removes value from list, collapse, and returns removes value

* Make second class, a node class
 */

// Class --> Linkedlist

class LinkedList{
constructor(){
this.head = null;
this.tail = null;
this.length =0


}

push1(value){
    // create node
    const node = new Node(value);
    this.length++
    // if don't have head 
    if(!this.head){
        // head object
        this.head = node
    }else{
        this.tail.next = node;
    }
    // tail object
    this.tail = node;

}

pop1(){
    return this.delete(this.length-1);
}
// find something in linked list
_find(index){
    // index is greater then length return 
    if(index >= this.length)return null;

    let current = this.head;

    for(let i=0;i < index;i++){
        current = current.next;
    }
    return current
}

get(index){
    const node = this._find(index);
    if(!node){
        return void 0
    }
    return node.value
}

delete(index){
    if(index === 0){
        const head = this.head;
        if(head){
            this.head = head.next
        }else{
            this.head = null;
            this.tail = null;
        }
        this.length--
        return this.head.value;
    }
    // move pointer around
    const node = this._find(index-1);
    const excise  =  node.next;
    if(!excise){
        return null
    }

    node.next = excise.next;
    if(!node.next){
        this.tail = node.next;
    }
    this.length--
    return excise.value

}
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }

}

var linkedList = new LinkedList();

linkedList.push1(1)
linkedList.push1(2)
linkedList.push1(3)
console.log(linkedList);
