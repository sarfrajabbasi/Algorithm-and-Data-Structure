const breadthFirstTraverse = (queue, array) => {
    // fill code in here
    if(!queue.length){
        return array
    }

    const node = queue.shift();
    array.push(node.value);
    if(node.left){
        queue.push(node.left)
    }
    if(node.right){
        queue.push(node.right)
    }
    return breadthFirstTraverse(queue,array)
  };

//   breadth 2:--(iterative)

function breadthFirstTraverse2(queue,array){
    while(queue.length){
        const node = queue.shift();
        // push values
        array.push(node.value);
        //push node child in queue
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return array
}
const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null

    }
}

console.log(breadthFirstTraverse([tree],[]),answer);
console.log(breadthFirstTraverse2([tree],[]),answer);

