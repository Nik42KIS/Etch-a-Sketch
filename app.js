

function setCellSize(cellSize) {
    const board = document.getElementById('board');
    const cols = Math.floor(board.clientWidth / cellSize);
    const rows = Math.floor(board.clientHeight / cellSize);
    let flag = false;
    board.innerHTML = ''; // Очищаем содержимое 'board'
  
    // Создаем и добавляем ячейки
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
        cell.addEventListener('mousedown', (e)=>{
          
            cell.classList.add('active__cell')
            flag = true
        })
        cell.addEventListener('mouseup', ()=>{
          flag = false
        })

        cell.addEventListener('mouseover', ()=>{
          if(flag){
            cell.classList.add('active__cell')
          }
        })

      board.appendChild(cell);


     
      
    }

    
    
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  }
  
  // Запросите размер ячейки с помощью prompt
  const cellSizeInput = prompt('Введите размер ячейки (не более 100px):');
  const cellSize = parseInt(cellSizeInput);
  
  // Проверка, что введено число и оно больше 0 и не более 100
  if (!isNaN(cellSize) && cellSize > 0 && cellSize <= 100) {
    // Вызовите функцию для установки размера ячейки
    setCellSize(cellSize);
  } else {
    alert('Пожалуйста, введите корректное число от 1 до 100.');
  }
  
  