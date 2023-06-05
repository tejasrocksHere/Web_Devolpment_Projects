let score=0;
let k=0;
cross=true;
audio=new Audio('music.mp3')
audiogo=new Audio('w.wav')
setInterval(() => {
    audio.play();
}, 500);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        // dino.classList.add('r')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino')
    gameOver=document.querySelector('.gameOver')
    obstacle=document.querySelector('.obstacle')
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

offsetX=Math.abs(dx-ox)
offsetY=Math.abs(dy-oy)
console.log("x" +offsetX+" Y:"+offsetY)
if (offsetX<104 && offsetY <=57 ) {
    gameOver.innerHTML = "Game Over! - Reload to Play Again"
    dino.classList.remove('animateDino')
    obstacle.classList.remove('obstacleAni')
    dino.classList.add('new')
    dino.classList.remove('dinanimateDino')
    gameOver.style.visibility='visible'
     
        audiogo.play();
        audio.pause();
    
  
}
else if(offsetX<103 && cross)
{
score++;
updateScore(score);
cross=false;
setInterval(() => {
    cross=true;
}, 1000);

setTimeout(() => {
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
    console.log('New animation duration: ', newDur)
}, 1000);



}

}, 10);



function updateScore(score){
    scoreCont.innerHTML="Your Score : "+score;
}