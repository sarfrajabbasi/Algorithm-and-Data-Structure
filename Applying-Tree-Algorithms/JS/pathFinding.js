const NO_ONE = 0;
const BY_B = 0;
const BY_A = 0;

function generateVisited(maze){
  // loop throught y-axis
  const visited = [];
  for(let y=0;y<maze.length;y++){
    const yaxis = []
    for(let x =0;x<maze[y].length;x++){
      const coordinates = {
        closed:maze[y][x]==1,
        length :0,
        openedBy:NO_ONE,
        x,
        y



      }
      yaxis.push(coordinates);
    }
    visited.push(yaxis);
  }
  return visited;
}

function findShortestPathLength(maze, [xA, yA], [xB, yB]) {
    // create grid that's the same size of the maze,that i can add object to.
    const visited = generateVisited(maze);
    // console.log(visited);

    // Inside the y-axis there is X-axis
    visited[yA][xA].openedBy = BY_A;
    visited[yB][xB].openedBy = BY_B;

    let aQueue = [visited[yA][xA]];
    let bQueue = [visited[yB][xB]];
    let iteration = 0;

    while(aQueue.length && bQueue.length){
      iteration++;
      let  aNeighbours = [];
      // gather neighbours
      while(aQueue.length){
        const coordinate = aQueue.shift();
        aNeighbours = aNeighbours.concat(getNeighbours(visited,coordinate.x,coordinate.y))

      }

      // process a neighbours:---

      for(let i=0;i<aNeighbours.length;i++){

        const neighbour = aNeighbours[i];

        if(neighbour.openedBy == BY_B){

          return neighbour.length + iteration;

        }else if(neighbour.openedBy === NO_ONE){

          neighbour.length = iteration;
          neighbour.openedBy = BY_A;
          aQueue.push(neighbour) ;

        }
      }
      let  bNeighbours = [];
      // gather neighbours
      while(bQueue.length){
        const coordinate = bQueue.shift();
        aNeighbours = bNeighbours.concat(getNeighbours(visited,coordinate.x,coordinate.y))

      }

      // process b neighbours:---

      for(let i=0;i<bNeighbours.length;i++){

        const neighbour =bNeighbours[i];

        if(neighbour.openedBy == BY_A){

          return neighbour.length + iteration;

        }else if(neighbour.openedBy === NO_ONE){

          neighbour.length = iteration;
          neighbour.openedBy = BY_B;
          bQueue.push(neighbour) ;

        }
      }
    }
    return -1
  }

  function getNeighbours(visited,x,y){
    const neighbours = [];
    if(y-1 >=0 && !visited[y-1][x].closed){
      // left
      neighbours.push(visited[y-1][x]);
    }
    if(y+1 <visited[0].length && !visited[y+1][x].closed){
      // right
      neighbours.push(visited[y+1][x]);
    }
    if(x-1 >=0 && !visited[y][x-1].closed){
      // up
      neighbours.push(visited[y][x-1]);
    }
    if(x+1 < visited.length && !visited[y][x+1].closed){
      // down
      neighbours.push(visited[y][x + 1 ]);
    }
    return neighbours
  }
  