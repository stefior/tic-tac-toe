"use strict";

const gameBoard = (() => {
  const x = 'X';
  const o = 'O';
  const board = [x, o, x,
                 o, x, o,
                 o, o, x];
  function displayBoard() {
    let container = document.querySelector('div.container');
    for (let square of board) {
      const mark = document.createElement('div');
      mark.textContent = square;
      container.appendChild(mark);
    }
  }
  return {displayBoard};
})();

(function flowControl() {
  
  return {};
})();

function Player() {
  
  return {};
}