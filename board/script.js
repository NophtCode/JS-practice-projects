const board = document.querySelector('#board');
// const colors = ['#A1EB71', '#A3E5FF', '#D77AEB', '#FFC166', '#FFC594'];
const colors = ['purple', 'pink', 'white'];
const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mousemove', () => {
       setColor(square); 
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square); 
     });
    
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor(); 
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}