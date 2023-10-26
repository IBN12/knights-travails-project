# Knights Travails 

## Introduction
A knight in chess can move to any square on the standard 8x8 chess board from any 
other square on the board, given enough turns. Its basic move is two steps forward and one step
to the side. It can face any direction. 

The task is to build function **knightMoves** that shows the shortest possible way to get from one square
to another by outputting all squares the knight will stop on along the way. 

You can think of the board as having 2-dimensional coordinates. Your funciton would therefore look like:
knightMoves([0,0], [1,2]) == [[0,0], [1,2]]

There will also be more than one fastest path. 

The knight will have a start point and end point. The start point will travail to the end point when the 
user clicks the Travail button. The shortest path from the start point to the end point will be displayed 
on the gameboard. 

## The Algorithm
This project uses a queue data structure with an algorithm thats similar to the breadth-first - level-order traversal 
for binary search trees. The **startPoint will be the predecessor in the queue that will be calculated amongst
all 8 possible default knight moves on the board. 

// All possible default knight moves:<br />
const KNIGHT_MOVES = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1],
]

Each calculation from the current predecessor will be stored in data object map and placed in the in the back of the
queue. Each new piece of data stored in the queue will be taken off from the top of queue when its first in line and
also calculated amongst all the possible default knight moves. This is in turn will also make each piece of data its 
own predecessor until the algorithm finds the intended **endPoint** target from the calculations being stored in the
object map. 


const queue = [knightStartPoint];<br />
while (!queue.includes(knightEndPoint)){
    const currentSquare = queue.shift();
    const enqueueList = currentSquare.possibleKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
}

## Quick Summary
* Each predecessor is a level in breadth-first - level-order traversal
* Each x and y coordinate in the square will be added to the queue from its predecessor level. 
