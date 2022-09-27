"use strict";

const gameBoard = (() => {
  const container = document.querySelector('div.container');
  const resultPara = document.querySelector('p.result-display');
  let boardArr = [];
  let lastMark = 'O';

  function newBoard() {
    container.innerHTML = '';
    resultPara.textContent = '';
    boardArr = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.addEventListener('click', () => addMark(square));
      container.appendChild(square);
    }
  }

  function updateBoardArr(square, mark) {
    boardArr[Array.from(container.childNodes).indexOf(square)] = mark;
  }

  function addMark(square) {
    if (square.textContent === '' && lastMark === 'X') {
      square.textContent = 'O';
      updateBoardArr(square, 'O');
      lastMark = 'O';
    }
    else if (square.textContent === '' && lastMark === 'O') {
      square.textContent = 'X';
      updateBoardArr(square, 'X');
      lastMark = 'X';
    }
    checkWin();
  }

  function checkWin() {
    let result = (() => {
      const b = boardArr;
      // 0 1 2
      // 3 4 5
      // 6 7 8
      
      // row wins
      if ((b[0] === b[1] && b[1] === b[2] && b[2] !== '') ||
          (b[3] === b[4] && b[4] === b[5] && b[5] !== '') ||
          (b[6] === b[7] && b[7] === b[8] && b[8] !== '') ||
      // col wins
          (b[0] === b[3] && b[3] === b[6] && b[6] !== '') ||
          (b[1] === b[4] && b[4] === b[7] && b[7] !== '') ||
          (b[6] === b[7] && b[7] === b[8] && b[8] !== '') ||
      // diagonal wins
          (b[0] === b[4] && b[4] === b[8] && b[8] !== '') ||
          (b[6] === b[4] && b[4] === b[2] && b[2] !== '')) return true;
      else if (b.indexOf('') < 0) return 'tie';

      return false;
    })();
    
    if (result === 'tie') resultPara.textContent = 'tie';
    else if (result) resultPara.textContent = `${lastMark} wins`;
  }
  
  return {newBoard};
})();

function Player() {
  
  return {};
}

const newBoardButton = document.querySelector('button.new-board');
newBoardButton.addEventListener('click', gameBoard.newBoard);
gameBoard.newBoard();