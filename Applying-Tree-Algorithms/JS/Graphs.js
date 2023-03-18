// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId  - number - the id of the user who is the root node
  
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

/*
  getUser  - function - a function that returns a user's object given an ID

  example

  {
    id: 308,
    name: "Beatrisa Lalor",
    company: "Youtags",
    title: "Office Assistant II",
    connections: [687, 997, 437]
  }
*/

import { getUser } from "../JS/jobs";
console.log(getUser);

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  // code goes here
let queue = [myId];
const seem = new Set(queue);
const jobs = {};
for(let i=0;i<= degreesOfSeparation;i++){
    const newQueue = []
    while(!queue.length){
        const user = getUser(queue.shift());
        //queue up the next iteration
        for(let j=0;j<user.connections.length;j++){
            const connection = user.connections[j];
            if(!seem.has(connection)){
                newQueue.push(connection);
                seem.add(connection)
            }
        }
        jobs[user.title] = jobs[user.title]? jobs[user.title] + 1 :1;
    }
    queue = newQueue;
}
const jobKeys = Obejct.keys(jobs);
let biggerNumber =  jobs[jobKeys[0]];
let jobName = jobKeys[0];

 for(let i=0;i<jobKeys.length;i++){
    const  currentJob = jobKeys[i];
    if(jobs[currentJob] > biggerNumber){
        jobName = currentJob;
        biggerNumber = jobs[currentJob];
    }
 }
 return jobName
};
