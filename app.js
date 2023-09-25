

function setCellSize(cellSize) {
    const board = document.getElementById('board');
    let clearButton = document.querySelector('.clear_button')
    let colorCell = document.querySelector('.color_input')
    const cols = Math.floor(board.clientWidth / cellSize);
    const rows = Math.floor(board.clientHeight / cellSize);
    let flag = false;
    board.innerHTML = ''; 

    
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
        cell.addEventListener('mousedown', (e)=>{
          // cell.style.background(colorCell)
            // cell.classList.add('active__cell')
            cell.style.background = colorCell.value
            console.log(e)
            flag = true
        })
        cell.addEventListener('mouseup', ()=>{
          flag = false
        })

        cell.addEventListener('mouseover', ()=>{
          if(flag){
            cell.style.background = colorCell.value
            // cell.classList.add('active__cell')
          }
        })

      board.appendChild(cell);


     
      
    }

    
    
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    clearButton.addEventListener('click', ()=>{
      board.innerHTML = ''; 
      setCellSize(20)
    })
  }


setCellSize(20)

  // // Запросите размер ячейки с помощью prompt
  // const cellSizeInput = prompt('Введите размер ячейки (не более 100px):');
  // const cellSize = parseInt(cellSizeInput);
  
  // // Проверка, что введено число и оно больше 0 и не более 100
  // if (!isNaN(cellSize) && cellSize > 0 && cellSize <= 100) {
  //   // Вызовите функцию для установки размера ячейки
  //   setCellSize(cellSize);
  // } else {
  //   alert('Пожалуйста, введите корректное число от 1 до 100.');
  // }
  
  