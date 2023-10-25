import { gameboard } from "./gameboard";
import knightPiece from '../images/black-knight.png';
import { knightMoves } from "./knightMoves";

// CreateGameboard(): Creates the main gameboard.
function CreateGameboard(){
    const content = document.getElementById('content');
    content.classList.add('content');

    const mainGameboard = document.createElement('div');
    mainGameboard.classList.add('main-gameboard');

    // const mainGameboardInterface = document.createElement('div');
    // mainGameboardInterface.classList.add('main-gameboard-interface');

    const board = gameboard.createGameboard();
    console.log("Gameboard: ", board); // Testing

    for (let i = 0; i < board.length; i++)
    {
        console.log("Each row: ",board[i]); // Testing
        const row = document.createElement('div'); 

        for (let j = 0; j < board[i].length; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.dataset.x = i;
            cell.dataset.y = j;

            // create white and black cells for the chess board. 
            if (i % 2 === 0)
            {
                if (j % 2 === 0)
                {
                    cell.classList.add('white');
                }
                else
                {
                    cell.classList.add('black');
                }
            }
            else
            {
                if (j % 2 === 0)
                {
                    cell.classList.add('black');
                }
                else
                {
                    cell.classList.add('white');
                }
            }

            row.appendChild(cell);
        }

        mainGameboard.appendChild(row);
    }

    // content.appendChild(mainGameboardInterface);
    content.appendChild(mainGameboard);
}

// CreateGameboardInterface(): Create the gameboard interface and interface buttons. 
function CreateGameboardInterface(){
    const content = document.getElementById('content');

    const mainGameboardInterface = document.createElement('div');
    mainGameboardInterface.classList.add('main-gameboard-interface');

    const startPointBtn = document.createElement('button');
    startPointBtn.textContent = 'Start Point';

    const endPointBtn = document.createElement('button'); 
    endPointBtn.textContent = 'End Point';

    const travailBtn = document.createElement('button');
    travailBtn.textContent = 'Travail';

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';

    const searchInProgress = document.createElement('div');
    searchInProgress.textContent = "No Search In Progess";

    mainGameboardInterface.appendChild(startPointBtn);
    mainGameboardInterface.appendChild(endPointBtn);
    mainGameboardInterface.appendChild(travailBtn);
    mainGameboardInterface.appendChild(clearBtn);
    mainGameboardInterface.appendChild(searchInProgress);

    content.appendChild(mainGameboardInterface);
}

// StartPoint(): Start point initiated.
function StartPoint(){
    console.log("Start Point Initiated"); // Testing
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const startPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(1)');
    startPointBtn.classList.add('button-clicked'); 
    
    cells.forEach((cell) => {
        cell.addEventListener('click', ChooseStartPoint);
    });
}

// ChooseStartPoint(): Choose the start point on the gameboard.
function ChooseStartPoint(e){
    console.log("Target: ", e.target); // Testing
    console.log("Start Point X: ", e.target.dataset.x); // Testing
    console.log("Start Point Y: ", e.target.dataset.y); // Testing

    const startPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`); 
    console.log("First way to expose the start point: ", startPoint); // Testing

    startPoint.classList.add('start-point');
    const knightPieceContainer = document.createElement('img');
    knightPieceContainer.classList.add('knight-piece-container');
    knightPieceContainer.src = knightPiece;
    startPoint.appendChild(knightPieceContainer); 

    gameboard.startPointX = e.target.dataset.x;
    gameboard.startPointY = e.target.dataset.y;

    const startPointTwo = e.target;
    console.log("Second way to expose the start point: ", startPointTwo); // Testing
    console.log("\n"); // Testing 

    const cells = document.querySelectorAll('.main-gameboard > div > div');
    // Remove the event once the start point is choosen. 
    cells.forEach((cell) => {
        cell.removeEventListener('click', ChooseStartPoint);
    });
}

// EndPoint(): End point initiated. 
function EndPoint(){
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const endPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(2)');

    if (gameboard.startPointX !== null)
    {
        console.log("End Point Initiated"); 
        endPointBtn.classList.add('button-clicked'); 
        cells.forEach((cell) => {
            cell.addEventListener('click', ChooseEndPoint);
        });
    }
    else
    {
        console.log("Please choose a start point first."); // Testing
        console.log("\n"); // Testing 
    }
}

// ChooseEndPoint(): Choose the end point on the gameboard. 
function ChooseEndPoint(e){
    console.log("Target: ", e.target); // Testing
    console.log("End Point X: ", e.target.dataset.x); // Testing
    console.log("End Point Y: ", e.target.dataset.y); // Testing
    
    const endPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    console.log("The End Point: ", endPoint); // Testing
    console.log("\n"); // Testing 

    endPoint.classList.add('end-point');

    gameboard.endPointX = e.target.dataset.x;
    gameboard.endPointY = e.target.dataset.y;

    const cells = document.querySelectorAll('.main-gameboard > div > div');
    // Remove the event once the end point is choosen.
    cells.forEach((cell) => {
        cell.removeEventListener('click', ChooseEndPoint); 
    });
}

// KnightMoves(): Commence moving the knight from the start point to the end point.
function KnightTravails(){
    const travailBtn = document.querySelector('.main-gameboard-interface > button:nth-child(3)');

    if (gameboard.startPointX !== null && gameboard.endPointX !== null)
    {
        travailBtn.classList.add('button-clicked'); 
        knightMoves([parseInt(gameboard.startPointX), parseInt(gameboard.startPointY)], [parseInt(gameboard.endPointX), parseInt(gameboard.endPointY)]);
    }
    else
    {
        console.log("please choose a start point and end point before travailing."); // Testing 
        console.log("\n"); // Testing 
    }
}

// ClearBoard(): Clear the board.
function ClearBoard(){
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const mainGameboardInterface = document.querySelectorAll('.main-gameboard-interface > button')
    gameboard.resetGameboard(); // Reset all the key properties in gameboard. 

    cells.forEach((cell) => {
        cell.replaceChildren(); // Removes all child nodes from the gameboard cell. 
        cell.classList.remove('start-point'); 
        cell.classList.remove('end-point');
    });

    mainGameboardInterface.forEach((btn) => {
        btn.classList.remove('button-clicked'); 
    });
}

// InitializeDomContent(): Initialize all the dom content for the application
function InitializeDomContent(){
    CreateGameboardInterface();
    CreateGameboard();

    const startPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(1)');
    startPointBtn.addEventListener('click', StartPoint); 

    const endPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(2)');
    endPointBtn.addEventListener('click', EndPoint); 

    const travailBtn = document.querySelector('.main-gameboard-interface > button:nth-child(3)');
    travailBtn.addEventListener('click', KnightTravails);

    const clearBtn = document.querySelector('.main-gameboard-interface > button:nth-child(4)');
    clearBtn.addEventListener('click', ClearBoard);
}

export default InitializeDomContent;