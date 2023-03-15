/*

Binary Search Tree!

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
    constructor(){
        this.root = null;
    }
    add(value){
        // same logic around if this is the root
        // root is null then we create root
        if(this.root === null){
            this.root = new Node(value)
            // console.log(this.root);
        }else{
            // second-  time
            let current = this.root;
            // use while loop to try and find where it should go.
            while(true){
                // 10 > new value then go left
                if(current.value >value){
                    // go left

                    if(current.left){
                        // mean loop again
                        // root ke child ko bhi us new value(child) se compare krenge iske liye current ko reAssign kenge current.left(root child se)
                        current = current.left
                    }else{
                        // agar root ka child nahi h to use create krenge(add it in root left)
                        current.left = new Node(value);
                        break;
                    }
                }else{
                    //  otherwise go right
                    // mean loop again
                    // root ke child ko bhi us new value(child) se compare krenge iske liye current ko reAssign kenge current.right(root child se)
                    if(current.right){
                        current = current.right;

                    }else{
                        // agar root ka child nahi h to use create krenge(add it in root right)
                        current.right = new Node(value);
                        // stop loop
                        break;
                    }
                }
                
            }
        }
        // return tree itself
        return this;  
        
    }
    toObject(){
        return this.root;
    }
  }

  
  // you might consider using a Node class too
  class Node {
    // code maybe goes here
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }
  var tree = new Tree();
  tree.add(10)
  tree.add(1)
  tree.add(11)
  console.log(tree);