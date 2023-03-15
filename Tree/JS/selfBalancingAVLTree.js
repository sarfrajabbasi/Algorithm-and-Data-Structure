/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/
// complete tree method:---

class Tree {
  constructor() {
    this.root = null;
  }
  add2(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
        this.root.add2(value)
    }
  }
  toObject(){
    return this.root;
  }
}

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        // adding a new node then update height in your tree
        this.height = 1;
    }

    // recursilve:-----------
    add3(value){
        //  decide to go left to right

        // find the correct place to add and make sure you're updating height
        if(value<this.value){
            // go lef t
            // have left child?
            if(this.left){
                // recursive
                this.left.add3(value);
            }else{
                this.left = new Node(value)
            }
            // adjust the height
            if(!this.right ||this.right.height <this.left.height ){
              this.height =   this.left.height + 1;

            }
        }else{
            // go right
            if(this.right){
                this.right.add3(value)
            }else{
                this.right = new Node(value);
            }
            if(!this.left || this.right.height > this.left.height){
                this.height = this.right.height +1
            }
        }
        // call balance method
        this.balance();
    }
    balance(){
        
        const rightHeight = this.right?this.right.height :0;
        
        const leftHeight = this.left? this.left.height:0;
        // ask is this node out of balance,by checking the heights
          // if not out of balance,do nothing
        
        // if it is out of  balance 
        // if it out of balance ask do i neet to do,do I need to single our double rotate
        // if single just call rotate on self
        // if double,call rotate on child, then on self
        
        if(leftHeight > rightHeight + 1){

            // if it's bent then gonna do double rotation
            const leftRightHeight = this.left.right ? this.left.right.height:0;


            const leftLeftHeight = this.left.left ? this.left.left.height:0;

            // double rotation
            if(leftRightHeight >leftLeftHeight ){
                this.left.rotateRR();

            }
            // always gonna rotateLL rotate on the node itself
            this.rotateLL()

        }else if(rightHeight>leftHeight+1){
            // rotation
            const rightRightHeight =this.right.right? this.right.right.height :0;
            const rightLeftHieght = this.right.left ? this.right.left.height :0;
             
            // double rotation
            if(rightLeftHieght>rightRightHeight){
                this.rotateLL()
            }
            this.rotateRR()
        }

    }
    rotateRR(){
        // if left child is heavy call
        // rotate
        const valueBefore = this.value;
        const leftBefore = this.left;

        this.value = this.right.value;

        this.left = this.right;
        this.right =  this.right.right;
        this.left = this.left.left;

        this.left.left = leftBefore;
        this.left.value = valueBefore;

        this.left.updateNewLocation()
        this.updateNewLocation();   
    }
    rotateLL(){
        // if right child is heavy call
         // rotate
         const valueBefore = this.value;
         const rightBefore = this.left;

         this.value = this.left.value;

         this.left = this.left;
         this.right =  this.left.left;
         this.right.left = this.right.right;

         this.right.right = rightBefore
         this.right.value = valueBefore;

         this.right.updateNewLocation()
         this.updateNewLocation();
    }
    updateNewLocation(){
        // calculate the  new height
        
        
        // when call the rotate methods,you gonna have to do updating on the height as well.

        // do i have left child and right child,and neither than height =1;
        // (leafNode(no child then h=1))
        if(this.right && !this.left){
            this.height =1;

        }else if(!this.right ||(this.left && this.right.height< this.left.height)){
            // if left child have greater height,then use its height and add one.
            // left height + 1
            this.height = this.left.height + 1;
            
        }else{
            // otherwise use right child and add 1 to its  height
            // right height + 1
            this.height = this.right.height + 1;
            
        }
    }
}
var tree = new Tree();
tree.add2(10)
// tree.add2()
// tree.add2(23)
console.log(tree);