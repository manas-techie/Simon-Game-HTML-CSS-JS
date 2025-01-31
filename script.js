let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","blue"];
  
let started = false;
let level = 0;

let h3 = document.querySelector('h3');
let allBtns = document.querySelectorAll(".button-div");

document.addEventListener("keypress,touchstart",function(){
    if(started == false){
        console.log("Game Started.")
        started = true ;
        
        levelUp();
    }
}) 

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300); 
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}` ;
    
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    gameSeq.push(randomColor); //add the game sequence color
    let randomBtn = document.querySelector(`.${randomColor}`);
     
    btnFlash(randomBtn);
}

function btnPress(){
    let btn = this; //this is the button which is pressed
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkColor(userSeq.length-1);
}

function checkColor(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `Game Over !!Your Score Was <b>${level}</b>.<br> Press Any Key to Start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
             document.querySelector('body').style.backgroundColor = "bisque";
        },150);
        restart();
    }
}


for(btn of allBtns){
    btn.addEventListener('click,touchstart',btnPress);
}

function restart(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0 ;
}
