import knightPiece from '../images/black-knight.png';

// displayMoves(): Displays the moves from start point to end point
export const displayMoves = (squareCoord) =>{
    const cells = document.querySelectorAll('.main-gameboard > div > div'); 

    const startPoint = document.querySelector('.start-point');

    const endPoint = document.querySelector('.end-point'); 

    const searchInProgress = document.querySelector('.main-gameboard-interface > div');

    let timer = 100;

    squareCoord.forEach((square) => {
        cells.forEach((cell) => {
            if (`${cell.dataset.x}, ${cell.dataset.y}` === square)
            {
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
                    
                    if (`${endPoint.dataset.x}, ${endPoint.dataset.y}` === `${cell.dataset.x}, ${cell.dataset.y}`)
                    {
                        searchInProgress.textContent = "Search Complete";
                        searchInProgress.setAttribute('style', 'background-color: #a3e635; border: 1px solid #a3e635;');
                    }
                }, timer);

                timer += 250;
            }
        });
    });
}