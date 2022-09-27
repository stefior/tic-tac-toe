"use strict";

const gameBoard = (() => {
  
  function addOMark(square) {
    square.textContent = 'O';
  }

  function addXMark(square) {
    square.textContent = 'X';
  }

  function newBoard() {
    let container = document.querySelector('div.container');
    container.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.addEventListener('click', () => addOMark(square));
      square.addEventListener('contextmenu', () => addXMark(square));
      window.addEventListener('contextmenu', e => e.preventDefault());
      container.appendChild(square);
    }
  }
  
  return {newBoard};
})();

(function flowControl() {
  
  return {};
})();

function Player() {
  
  return {};
}

const newBoardButton = document.querySelector('button.new-board');
newBoardButton.addEventListener('click', gameBoard.newBoard);
gameBoard.newBoard();