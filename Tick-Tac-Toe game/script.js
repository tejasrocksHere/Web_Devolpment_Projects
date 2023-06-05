console.log("Welcome to tic tac toe Game!!");
let music=new Audio("3.mp3");
let turnaudio=new Audio("ding.mp3");
let over=false;
let gameover=new Audio("gameOver.wav");
// gameover.play();
let turn="X"
// fuction to change the turn/
// music.play();
const changeTurn=()=>{

    return turn ==="X"?"0":"X";
}

//fuction to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            over = true
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}


///main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnaudio.play();
            checkWin();
            if (!over){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
            else{
                gameover.play();
            }
        }
    })
})


// //add on click reset btn
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px";
    });
   
over = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px";

    turn = "X"; 
})
start.addEventListener('click',()=>{

music.play();
    
})