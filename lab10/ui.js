export let board = ["", "", "", "", "", "", "", "", ""];
export let currentPlayer = "X";
export let gameOver = false;

export function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        if (checkWinner()) gameOver = true;
        else currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

export function checkWinner() {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return winCombos.some(combo => {
        const [a,b,c] = combo;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

export function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
}