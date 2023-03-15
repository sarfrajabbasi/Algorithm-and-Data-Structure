//  O(n!) - Factorial time :- Complexity Rank: Worst

function getPermutations (arr) {
    if (arr.length <= 2) {
      if (arr.length === 2) return [arr, [arr[1], arr[0]]]
      return arr
    }
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          getPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  }
  

const cities  = ['Copenhagen',"Stockholm","Oslo"];

console.log(getPermutations(cities))

/*
This is factorial 3, or 3!, returns 6 different routes*/
