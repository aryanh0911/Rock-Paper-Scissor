let hands = ["rock", "paper", "scissor"]

let randomNumber1, randomNumber2;
let result = document.querySelector(".winner")


function Draw1() {
    randomNumber1 = Math.floor(Math.random()*3);
    randomHand1 = hands[randomNumber1]
    let player1_p = document.querySelector(".player1")
    player1_p.textContent = "Player 1: " + randomHand1

    checkWinner()
}


function Draw2() {
    randomNumber2 = Math.floor(Math.random()*3);
    let randomHand2 = hands[randomNumber2]
    let player2_p = document.querySelector(".player2")
    player2_p.textContent = "Player 2: " + randomHand2

    checkWinner()
}

function checkWinner(){

    if(randomNumber1===randomNumber2){
        result.textContent = "Draw"
    }
    if(randomNumber1===0 && randomNumber2===2) {
        result.textContent = "Winner: Player 1"
    }

    else if(randomNumber1===0 && randomNumber2===1){
        result.textContent = "Winner: Player 2"
    }
    else if(randomNumber1===1 && randomNumber2===0){
        result.textContent = "Winner: Player 1"
    }
    else if(randomNumber1===1 && randomNumber2===2){
        result.textContent = "Winner: Player 2"
    }
    else if(randomNumber1===2 && randomNumber2===0){
        result.textContent = "Winner: Player 2"
    }
    else if(randomNumber1===2 && randomNumber2===1){
        result.textContent = "Winner: Player 1"
    }
    
}
