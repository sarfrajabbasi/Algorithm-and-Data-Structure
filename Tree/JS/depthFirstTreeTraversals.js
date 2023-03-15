const preorderTraverse = (node, array) => {
    if(!node){
        return array
    }
    array.push(node.value);
    array = preorderTraverse(node.left,array)
    array = preorderTraverse(node.right,array)
    return array
  };
  
  const inorderTraverse = (node, array) => {
    // if there is no node then return array
    if(!node){
        return array
    }
    // recursively call on left node
    array = inorderTraverse(node.left,array)
    // and push the value on array
    array.push(node.value);
    // recursively call on left right
    array = inorderTraverse(node.right,array)
    return array
  };
  
  const postorderTraverse = (node, array) => {
    if(!node){
        return array
    }
    array = postorderTraverse(node.left,array)
    array = postorderTraverse(node.right,array)
    array.push(node.value);
    return array
  };


  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };

console.log(preorderTraverse(tree,[])); 
console.log(inorderTraverse(tree,[])); 
console.log(postorderTraverse(tree,[])); 
  