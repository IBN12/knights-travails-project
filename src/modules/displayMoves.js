import knightPiece from '../images/black-knight.png';

// displayMoves(): Displays the moves from start point to end point
export const displayMoves = (squareCoord) =>{
    console.log("displaying Moves: ", squareCoord); // Testing

    const cells = document.querySelectorAll('.main-gameboard > div > div'); 
    const startPoint = document.querySelector('.start-point');
    console.log(`Start Point: ${startPoint.dataset.x}, ${startPoint.dataset.y}`); // Testing
    const endPoint = document.querySelector('.end-point'); 
    console.log(`End Point: ${endPoint.dataset.x}, ${endPoint.dataset.y}`); // Testing
    console.log("\n"); // Testing

    let timer = 100;

    squareCoord.forEach((square) => {
        cells.forEach((cell) => {
            if (`${cell.dataset.x}, ${cell.dataset.y}` === square)
            {
                console.log(`${cell.dataset.x}, ${cell.dataset.y}`); // Testing

                if (`${startPoint.dataset.x}, ${startPoint.dataset.y}` === `${cell.dataset.x}, ${cell.dataset.y}`)
                {
                    cell.replaceChildren(); // Remove the original start-point so it doesn't conflict the travailing start point. 
                }

                setTimeout(() => {
                    cell.classList.add('start-point');
                    const knightPieceContainer = document.createElement('img');
                    knightPieceContainer.classList.add('knight-piece-container');
                    knightPieceContainer.src = knightPiece;
                    cell.appendChild(knightPieceContainer); 
                }, timer);

                timer += 250;
            }
        });
    });
}