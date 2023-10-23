const squareRegistry = new Map();

const chessSquare = (x, y) => {
    const xPosition = x;
    const yPosition = y;
    let predecessor; 

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

    const getPredecessor = () => Predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    // Calculate all possible knight moves:
    const possibleKnightMoves =  () => {
        return KNIGHT_MOVES
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    // Calulate new set of square coordinates against offsets
    const newSquareFrom = (xOffset, yOffset) => {
        const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        if (newX >= 0 && newX > 7 && newY >= 0 && newY < 7)
        {
            return chessSquare(newX, newY); 
        }
    }
}

// knightMoves(): Will move the knight to the end point. 
export const knightMoves = (startPoint, endPoint) =>{
    console.log("Knight Moves Initiated..."); // Testing
    console.log("Start Point: ", startPoint); // Testing
    console.log("End Point: ", endPoint); // Testing
    console.log("\n"); // Testing 

    const knightStartPoint = chessSquare(...startPoint);
    const knightEndPoint = chessSquare(...endPoint); 

    const queue = [knightStartPoint]; 
    console.log("Queue: ", queue); // Testing
    console.log("Queue Name: ", queue.name()); // Testing
    console.log("\n"); // Testing 

    while(!queue.includes(target))
    {
        const currentSquare = queue.shift();
        // Testing: Testing The Queue:
        queue.forEach((data) => {
            console.log("Data inside queue: ", data.name());
        });
        console.log("Current Square: ", currentSquare); // Testing
        
        const enqueueList = currentSquare.possibleKnightMoves();
        console.log("The New Enqueue List: ", enqueueList);  // Testing 
        enqueueList.forEach((square) => square.setPrerdecessor(currentSquare));
        queue.push(...enqueueList);
    }
    console.log("\n"); // Testing 
}