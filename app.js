const tableSize = 5;
const numbersTable = document.getElementById('numbersTable');

function initializeTable() {
  numbersTable.innerHTML = ''; 
  for (let i = 0; i < tableSize; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < tableSize; j++) {
      const cell = document.createElement('td');
      const randomNumber = Math.floor(Math.random() * 100); 
      cell.textContent = randomNumber;
      if (randomNumber >= 50) {
        cell.style.backgroundColor = 'orange'; 
      }
      row.appendChild(cell);
    }
    numbersTable.appendChild(row);
  }
}

function addRandomCell() {
  const rows = numbersTable.rows;

  if (rows.length === 0) {
    initializeTable();
    return;
  }
  
  let lastRow = rows[rows.length - 1];
  
  if (lastRow.cells.length < tableSize) {
    const cell = document.createElement('td');
    const randomNumber = Math.floor(Math.random() * 100);
    cell.textContent = randomNumber;
    if (randomNumber >= 50) {
      cell.style.backgroundColor = 'orange';
    }
    lastRow.appendChild(cell);
  } else {
    const newRow = document.createElement('tr');
    const cell = document.createElement('td');
    const randomNumber = Math.floor(Math.random() * 100);
    cell.textContent = randomNumber;
    if (randomNumber >= 50) {
      cell.style.backgroundColor = 'orange';
    }
    newRow.appendChild(cell);
    numbersTable.appendChild(newRow);
  }
}

initializeTable();

document.getElementById('addNumberButton').addEventListener('click', addRandomCell);

