export const gameboard = {
    createGameboard(){
        const board = [...Array(8)].map(() => Array(8).fill(""));
        return board;
    }
}