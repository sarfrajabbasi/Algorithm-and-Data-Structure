const { chdir } = require("process");

class Node {
    constructor(string){
        this.children = [];
        this.terminus = false;
        this.value= string[0];
        if(string.length >1){
            // recursively create new nodes
            this.children.push(new Node(string.substring(1)))
        }else{
            this.terminus = true;
        }
    }
    add(string){
        const value = string[0];
        const next = string.substr(1);
        for(let i=0;this.children.length;i++){
            const child = this.children[i];

          if(child.value === value){ 
            
             if(next){
                child.add(next);

              }else{
                child.terminus =true;
              }
              return;
           }
        }
        this.children.push(new Node(string))
    }

    _complete(search,built,suggestions){
        if(suggestions.length >= 3 || (search && search[0] !== this.value)){
            return suggestions;
        }
        if(this.terminus){
            suggestions.push(`${built}${this.value}`);
        }
        for(let i=0;i<this.children.length;i++){
            const child = this.children[i];
          suggestions =   child._complete(search.substr(1),built + this.value,suggestions);
        }

        return suggestions
    }
    complete(string) {
        
        let completetions = [];

        for(let i=0;i<this.children.length;i++){
            const child = this.children[i]
            completetions =completetions.concat(child.complete(string,"",[]))
        } 
      return completetions;
    }
  }
  
  const createTrie = (words) => {
    // you do not have to do it this way; this is just how I did it
    const root = new Node("");
  
    for(let i=0;i<words.length;i++){
        const word = words[i];
        root.add(word.toLowerCase());

    }
    // more code should go here
  
    return root;
  };