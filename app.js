function setCellSize(cellSize) {
  const board = document.getElementById('board');
  let clearButton = document.querySelector('.clear_button');
  let colorCell = document.querySelector('.color_input');
  const cols = Math.floor(board.clientWidth / cellSize);
  const rows = Math.floor(board.clientHeight / cellSize);
  let flag = false;
  board.innerHTML = '';

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mousedown', (e) => {
      cell.style.background = colorCell.value;
      console.log(e);
      flag = true;
    });
    cell.addEventListener('mouseup', () => {
      flag = false;
    });

    cell.addEventListener('mouseover', () => {
      if (flag) {
        cell.style.background = colorCell.value;
      }
    });

    board.appendChild(cell);
  }

  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  clearButton.addEventListener('click', () => {
    board.innerHTML = '';
    setCellSize(20);
  });
}

setCellSize(20);
