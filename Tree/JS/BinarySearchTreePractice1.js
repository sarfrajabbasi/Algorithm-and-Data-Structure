// BST:-- Tree class will have keep track of a root which will be  the first item added to your tree.(acc to it go left and right)

// value = node value
// left == node/object-->left node of root  node  that itself tree
// right == node/object-->right node of root  node  that itself tree


class Tree{
    constructor(){
        this.root = null
    }

    add1(value){
        // if root is null  then create node,
        if(this.root === null){
            const node = new Node(value);
            this.root = node;
        }else{
            // if already there then we set value to its as child
            let current = this.root
            
            // run while loop for where value should go
            while(true){
                if(current.value >value){
                    // go left
                    if(current.left){
                        // left ke liye bhai loop chale if it exit already
                        current =current.left
                    }else{
                        current.left = new Node(value);
                        break
                    }
                }else{
                    if(current.right){
                        current =current.right
                    }else{
                        current.right = new Node(value);
                        break
                    }
                }
            }
        }
        return this;
        
    }
    toObject(){
        return this.root;
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}


var tree = new  Tree();

tree.add1(10)
tree.add1(1);
tree.add1(4);
tree.add1(0);
tree.add1(15);
tree.add1(13);
tree.add1(12);
tree.add1(11);
tree.add1(20);//b
tree.add1(17);//s
tree.add1(19);//s
tree.add1(25);//s
console.log(tree)
