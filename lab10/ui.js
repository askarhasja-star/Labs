import { board, currentPlayer, makeMove, checkWinner, resetGame } from './game.js';

console.log('ui.js loaded, imported game.js');

export function renderBoard() {
  const container = document.getElementById('board');
  if (!container) { console.error('#board not found'); return; }
  container.innerHTML = '';
  board.forEach((cell, i) => {
    const div = document.createElement('div');
    div.className = 'cell';
    div.textContent = cell;
    div.addEventListener('click', () => {
      makeMove(i);
      updateUI();
    });
    container.appendChild(div);
  });
  console.log('renderBoard rendered', board);
}

export function updateUI() {
  renderBoard();
  const status = document.getElementById('status');
  if (!status) { console.error('#status not found'); return; }
  const winner = checkWinner();
  if (winner) {
    status.textContent = `Победил игрок ${winner}!`;
  } else if (!board.includes("")) {
    status.textContent = "Ничья!";
  } else {
    status.textContent = `Ход игрока: ${currentPlayer}`;
  }
  console.log('updateUI status:', status.textContent);
}

export function setupGame() {
  const resetBtn = document.getElementById('reset');
  if (!resetBtn) console.error('#reset not found');
  else resetBtn.onclick = () => { resetGame(); updateUI(); };
  updateUI();
  console.log('setupGame done');
}