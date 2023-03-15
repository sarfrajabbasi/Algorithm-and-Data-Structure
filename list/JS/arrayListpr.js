class ArrayList{
    constructor(){
        this.data = {};
        this.length = 0;
    }

    push1(value){
        // add a item into end of the array
        this.data[this.length] = value;
        this.length++
        return value
    }

    pop1(){
        // remove the last item in the array and return
        const response = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--

        // return this.delete(this.length-1);
        return response
    }

    get1(index){
        // return that item form the array
        return this.data[index];
    }

    delete1(index){
        // take index removes item from the array and collapse(shift)
        const response =  this.data[index];
        this._collapseTo(index);
        return response;

    }

    collapseTo(index){
        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

var list = new ArrayList()
console.log(list.push1(1))
console.log(list)