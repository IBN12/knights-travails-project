import { gameboard } from "./gameboard";

// CreateGameboard(): Creates the main gameboard.
function CreateGameboard(){
    const content = document.getElementById('content');
    content.classList.add('content');

    const mainGameboard = document.createElement('div');
    mainGameboard.classList.add('main-gameboard');

    const mainGameboardInterface = document.createElement('div');
    mainGameboardInterface.classList.add('main-gameboard-interface');

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

    content.appendChild(mainGameboardInterface);
    content.appendChild(mainGameboard);
}

// InitializeDomContent(): Initialize all the dom content for the application
function InitializeDomContent(){
    
    CreateGameboard();
}

export default InitializeDomContent;