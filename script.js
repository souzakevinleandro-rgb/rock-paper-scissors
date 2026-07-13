const btnPedra = document.querySelector("#pedra")
const btnPapel = document.querySelector("#papel")
const btnTesoura = document.querySelector("#tesoura")
const btnRestart = document.querySelector("#restart")
const scorePlayer = document.querySelector("#my-score")
const scoreOpponent = document.querySelector("#opponent-score")
const result = document.querySelector("h1")

btnRestart.style.display = "none";
let playerHand = ""
let opponentHand = ""
let playerScore = 0
let opponentScore = 0

function gameLogic(a, b) {
    switch (a) {
        case "pedra":
            if (b == "papel") {
                result.innerHTML = "Você Perdeu!"
                opponentScore++
            }

            if (b == "tesoura") {
                result.innerHTML = "Você Ganhou!"
                playerScore++
            }

            if (a == b) {
                result.innerHTML = "Empate!"
            }
        break;

        case "papel":
            if (b == "pedra") {
                result.innerHTML = "Você Ganhou!"
                playerScore++
            }

            if (b == "tesoura") {
                result.innerHTML = "Você Perdeu!"
                opponentScore++
            }

            if (a == b) {
                result.innerHTML = "Empate!"
            }
        break;

        case "tesoura":
            if (b == "pedra") {
                result.innerHTML = "Você Perdeu!"
                opponentScore++
            }

            if (b == "papel") {
                result.innerHTML = "Você Ganhou!"
                playerScore++
            }

            if (a == b) {
                result.innerHTML = "Empate!"
            }
        break;

        default:
            console.log("ERRO!")
        break;
    }
    scorePlayer.innerHTML = ` ${playerScore}`
    scoreOpponent.innerHTML = ` ${opponentScore}`
    btnRestart.style.display = "block";
}

function opponentTurn() {
    opponentHand = Math.floor(Math.random() * (2 - 0 + 1)) + 0

    switch (opponentHand) {
        case 0:
            opponentHand = "pedra"
        break;

        case 1:
            opponentHand = "papel"
        break;

        case 2:
            opponentHand = "tesoura"
        break;

        default:
            console.log("ERRO!")
        break;
}
    alert(`Seu oponente escolheu: ${opponentHand}`)
    gameLogic(playerHand, opponentHand)
}

const restartGame = () => {btnRestart.style.display = "none"; result.innerHTML = "Jokenpô"; btnPedra.disabled = false; btnPapel.disabled = false; btnTesoura.disabled = false;}

const playerTurn = (hand) => {playerHand = hand; btnPedra.disabled = true; btnPapel.disabled = true; btnTesoura.disabled = true; opponentTurn()}

btnPedra.addEventListener("click", () => playerTurn(btnPedra.id))
btnPapel.addEventListener("click", () => playerTurn(btnPapel.id))
btnTesoura.addEventListener("click", () => playerTurn(btnTesoura.id))
btnRestart.addEventListener("click", restartGame)