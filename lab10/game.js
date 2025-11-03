import { board, currentPlayer, makeMove, checkWinner, resetGame } from './game.js';

export function renderBoard() {
    const container = document.getElementById('board');
    container.innerHTML = '';
    board.forEach((cell, i) => {
        const div = document.createElement('div');
        div.className = 'cell';
        div.textContent = cell;
        div.onclick = () => {
            makeMove(i);
            updateUI();
        };
        container.appendChild(div);
    });
}

export function updateUI() {
    renderBoard();
    const status = document.getElementById('status');
    if (checkWinner()) {
        status.textContent = Победил игрок ${currentPlayer}!;
    } else if (!board.includes("")) {
        status.textContent = "Ничья!";
    } else {
        status.textContent = Ход игрока: ${currentPlayer};
    }
}

export function setupGame() {
    document.getElementById('reset').onclick = () => {
        resetGame();
        updateUI();
    };
    updateUI();
}