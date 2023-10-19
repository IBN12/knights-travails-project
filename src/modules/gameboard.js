export const gameboard = {
    startPointX: null,
    startPointY: null,
    endPointX: null,
    endPointY: null,
    createGameboard(){
        const board = [...Array(8)].map(() => Array(8).fill(""));
        return board;
    },

    resetGameboard(){
        this.startPointX = null;
        this.startPointY = null;
        this.endPointX = null;
        this.endPointY = null;
    }
}