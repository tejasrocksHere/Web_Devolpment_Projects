let direction = { x: 0, y: 0 };
let foodSound = new Audio('eating.wac');
let gameOverSound = new Audio('over.wac');
let moveSound = new Audio('ding.mp3');
let musicSound = new Audio('music.mp3');
// musicSound.play();
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 12, y: 12}]

function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    else {
        lastPaintTime = ctime;
    }
}


function GameEngine() {
    // part1:updating snake body part
    // part1:display the snake and food


    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');

        
        board.appendChild(snakeElement);

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
    });
    // Display the food
   
}