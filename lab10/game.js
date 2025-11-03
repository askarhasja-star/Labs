export let board = ["","","","","","","","",""];
export let currentPlayer = "X";

console.log('game.js loaded');

export function makeMove(index) {
  console.log('makeMove called', index);
  if (board[index] === "" && !checkWinner()) {
    board[index] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    console.log('move ignored (occupied or game over)', index, board[index]);
  }
}

export function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a,b,c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      console.log('winner found', board[a], 'combo', [a,b,c]);
      return board[a];
    }
  }
  return null;
}

export function resetGame() {
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  console.log('resetGame called');
}