const btnR = document.querySelector("#pedra")
const btnP = document.querySelector("#papel")
const btnS = document.querySelector("#tesoura")
const btnRestart = document.querySelector("#restart")
const scorePlayer = document.querySelector("#my-score")
const scoreOpponent = document.querySelector("#opponent-score")
const result = document.querySelector("h1")
btnRestart.style.display = "none";
let playerHand = ""
let opponentHand = ""
let playerScore = 0
let opponentScore = 0
const GAME_OPTIONS = {
    ROCK: 'pedra',
    PAPER: 'papel',
    SCISSORS: 'tesoura'
}

function gameLogic(a, b) {
    if( (a == GAME_OPTIONS.ROCK && b == GAME_OPTIONS.SCISSORS) || (a == GAME_OPTIONS.PAPER && b == GAME_OPTIONS.ROCK) || (a == GAME_OPTIONS.SCISSORS && b == GAME_OPTIONS.PAPER) ) {
        result.innerHTML = "Você Ganhou!"
        playerScore++
        scorePlayer.innerHTML = ` ${playerScore}`
    } else if (a == b) {
        result.innerHTML = "Empate!"
    } else {
        result.innerHTML = "Você Perdeu!"
        opponentScore++
        opponentScore.innerHTML = ` ${opponentScore}`
    }
    scorePlayer.innerHTML = ` ${playerScore}`
    scoreOpponent.innerHTML = ` ${opponentScore}`
    btnRestart.style.display = "block";
}

function opponentTurn() {
    let opcoes = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    let aleatorio = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    opponentHand = opcoes[aleatorio]
    alert(`Player: ${playerHand} \n Opponent: ${opponentHand}`)
    gameLogic(playerHand, opponentHand)
}

function disBTN() {
    btnR.disabled = true;
    btnP.disabled = true;
    btnS.disabled = true;
}

function enBTN() {
    btnR.disabled = false;
    btnP.disabled = false;
    btnS.disabled = false;
}

const restartGame = () => {btnRestart.style.display = "none"; result.innerHTML = "Jokenpô"; enBTN();}
const playerTurn = (hand) => {playerHand = hand; opponentTurn(); disBTN()}

