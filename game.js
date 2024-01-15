var rock = document.querySelector("#rock-hand-image");
var rockButton = document.getElementById("rock");
var paper = document.querySelector("#paper-hand-image");
var paperButton = document.getElementById("paper");
var scissors = document.querySelector("#scissors-hand-image");
var sessiorButton = document.getElementById("scissors");
var scorePlayer = document.getElementById("player-score");
var scoreComputer = document.getElementById("computer-score");
let compImg = document.querySelector("#computer-side img");
let gameover = document.getElementById("gameOver");
var button = document.getElementById("play-Again");
let controlBtn=document.getElementById("control-buttons")

let playerScore = 0;
let computerScore = 0;

rockButton.onclick=()=>{
    rock.style.display="block"
    scissors.style.display="none"
    paper.style.display="none"
    computerRandom()
    if(x==2){
        computerScore++;
        scoreComputer.textContent=computerScore
    }
    else if(x==3){
        playerScore++;
        scorePlayer.textContent=playerScore;
    }
    checkWin();    
}
paperButton.onclick=()=>{
    paper.style.display="block"
    rock.style.display="none"
    scissors.style.display="none"
    computerRandom()
    if(x==3){
        computerScore++;
        scoreComputer.textContent=computerScore
    }
    else if(x==1){
        playerScore++;
        scorePlayer.textContent=playerScore;
    }
    checkWin();
}
sessiorButton.onclick=()=>{
    scissors.style.display="block"
    rock.style.display="none"
    paper.style.display="none"
    computerRandom()
    if(x==1){
        computerScore++;
        scoreComputer.textContent=computerScore
    }
    else if(x==2){
        playerScore++;
        scorePlayer.textContent=playerScore;
    }
    checkWin();
}
function computerRandom() {
    x = Math.ceil(Math.random() * 3);
    switch (x) {
        case 1:
            compImg.setAttribute("src", "./assets/rock-hand.png");
            break;
        case 2:
            compImg.setAttribute("src", "./assets/paper-hand.png");
            break;
        case 3:
            compImg.setAttribute("src", "./assets/scissors-hand.png");
            break;
    }
}
var statusofGame = document.getElementById("gameStatus");
function checkWin() {
    if (playerScore == 5) {
        gameover.style.display = "block";
        statusofGame.textContent = "Player won the game";
        controlBtn.style.display="none"
    } else if (computerScore == 5) {
        gameover.style.display = "block";
        statusofGame.textContent = "Computer won the game";
        controlBtn.style.display="none"
    }
}
button.onclick = () => {
window.location.reload()
};