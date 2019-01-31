
var grid = document.getElementById('grid');
var msg = document.querySelector('.message');
var chooser = document.querySelector('form');
var mark;
var cells;

// add click listener to radio buttons
function setPlayer() {
  mark = this.value;
  msg.textContent = mark + ', click on a square to make your move!';
  chooser.classList.add('game-on');
  this.checked = false;
  makeGrid();
}

// add click listener to each cell
function playerMove() {
  if (this.textContent == '') {
    this.textContent = mark;
    checkRow();
    changMark();
    computerMove();
  }
}

// let the computer make the next move
function computerMove() {
  var selectCells = [];
  var random;
  
  cells.forEach(function(cell){
    if (cell.textContent == '') {
      selectCells.push(cell);
    }
  });
  
  // computer marks a random EMPTY cell
  random = Math.ceil(Math.random() * selectCells.length) - 1;
  selectCells[random].textContent = mark;
  checkRow();
  changMark();
}

// switch player mark
function changMark() {
  if (mark == 'X') {
    mark = 'O';
  } else {
    mark = 'X';
  }
}

// determine a winner
function winner(a, b, c) {
  if (a.textContent == mark && b.textContent == mark && c.textContent == mark) {
    
    a.classList.add('winner');
    b.classList.add('winner');
    c.classList.add('winner');
    alert(mark + ' is the winner!');
	resetGrid();
    return true;
    
   
  } else {
    return false;
  }
}

// check cell combinations 
function checkRow() {
  winner(document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3'));
  winner(document.getElementById('c4'), document.getElementById('c5'), document.getElementById('c6'));
  winner(document.getElementById('c7'), document.getElementById('c8'), document.getElementById('c9'));
  winner(document.getElementById('c1'), document.getElementById('c4'), document.getElementById('c7'));
  winner(document.getElementById('c2'), document.getElementById('c5'), document.getElementById('c8'));
  winner(document.getElementById('c3'), document.getElementById('c6'), document.getElementById('c9'));
  winner(document.getElementById('c1'), document.getElementById('c5'), document.getElementById('c9'));
  winner(document.getElementById('c3'), document.getElementById('c5'), document.getElementById('c7'));
}

// clear the grid
function resetGrid() {
  mark = 'X';
  cells.forEach(function(cell){
    cell.textContent = '';
    cell.classList.remove('winner');
  });
  msg.textContent = 'Choose your player:';
  chooser.classList.remove('game-on');
  grid.innerHTML = '';
}

// build the grid
function makeGrid() 
{
  for (var i = 1; i <= 9; i++)
   {
    var cell = document.createElement('li');
    cell.id = 'c' + i;
    cell.addEventListener('click', playerMove, false);
    grid.appendChild(cell);
  }
  
  cells = Array.prototype.slice.call(grid.getElementsByTagName('li'));
}

// this is where the player will select mark from html 
var players = Array.prototype.slice.call(document.querySelectorAll('input[name=player-choice]'));
players.forEach(function(choice){
  choice.addEventListener('click', setPlayer, false);
});

var resetButton = chooser.querySelector('button');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  resetGrid();
});