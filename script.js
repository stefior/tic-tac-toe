"use strict";

const gameBoard = (() => {
  const container = document.querySelector('div.container');
  let boardArr = [];
  let lastMark = '';

  function newBoard() {
    container.innerHTML = '';
    boardArr = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.addEventListener('click', () => addOMark(square));
      square.addEventListener('contextmenu', () => addXMark(square));
      window.addEventListener('contextmenu', e => e.preventDefault());
      container.appendChild(square);
    }
  }

  function updateBoardArr(square, mark) {
    boardArr[Array.from(container.childNodes).indexOf(square)] = mark;
  }

  function addOMark(square) {
    if (square.textContent === '' && lastMark !== 'O') {
      square.textContent = 'O';
      updateBoardArr(square, 'O');
      lastMark = 'O';
      checkWin();
    }
  }

  function addXMark(square) {
    if (square.textContent === '' && lastMark !== 'X') {
      square.textContent = 'X';
      updateBoardArr(square, 'X');
      lastMark = 'X';
      checkWin();
    }
  }

  function checkWin() {
    
  }
  
  return {newBoard};
})();

function Player() {
  
  return {};
}

const newBoardButton = document.querySelector('button.new-board');
newBoardButton.addEventListener('click', gameBoard.newBoard);
gameBoard.newBoard();