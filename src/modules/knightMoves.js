import { displayMoves } from "./displayMoves";

const squareRegistry = new Map();

const chessSquare = (x, y) => {
    const xPosition = x;
    const yPosition = y;
    let predecessor; 

    console.log("Chess Square Initiated..."); // Testing 
    console.log("X Position: ", xPosition); // Testing 
    console.log("Y Position: ", yPosition); // Testing 
    console.log("\n"); // Testing 

    // All possible default knight moves:
    const KNIGHT_MOVES = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    // Calculate all possible knight moves:
    const possibleKnightMoves = () => {
        return KNIGHT_MOVES
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    // Calulate new set of square coordinates against offsets
    const newSquareFrom = (xOffset, yOffset) => {
        const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7)
        {
            return chessSquare(newX, newY); 
        }
    }

    // Store data in an object.
    if (squareRegistry.has(name()))
    {
        return squareRegistry.get(name());
    }
    else
    {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }
        squareRegistry.set(name(), newSquare); 
        console.log("The data name: ", newSquare.name()); // Testing
        console.log("The new data for the square registry: ", newSquare) // Testing
        console.log("\n"); // Testing 
        return newSquare; 
    }
}

// knightMoves(): Will move the knight to the end point. 
export const knightMoves = (startPoint, endPoint) =>{
    squareRegistry.clear();
  
    console.log("Knight Moves Initiated..."); // Testing
    console.log("Start Point: ", startPoint); // Testing
    console.log("End Point: ", endPoint); // Testing
    console.log("\n"); // Testing 

    const knightStartPoint = chessSquare(...startPoint);
    const knightEndPoint = chessSquare(...endPoint); 

    const queue = [knightStartPoint]; 

    while(!queue.includes(knightEndPoint))
    {
        const currentSquare = queue.shift();
        console.log("Current Square: ", currentSquare.name()); // Testing 
        
        const enqueueList = currentSquare.possibleKnightMoves();
        console.log("Enqueue List: ", enqueueList); // Testing
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }

    const path = [knightEndPoint];
    while (!path.includes(knightStartPoint))
    {
        const previousSquare = path[0].getPredecessor();
        path.unshift(previousSquare); 
    }

    console.log("Displaying the predecessor paths:"); // Testing 
    let squareCoord = [];
    path.forEach((square) => {
        console.log("The Square: ", square.name());
        squareCoord.push(square.name());
    });
    console.log("\n"); // Testing 

    displayMoves(squareCoord);
}