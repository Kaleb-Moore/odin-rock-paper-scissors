let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;

    let computer;

    if (random === 1){
        computer = "Rock"
    } else if (random === 2){
        computer = "Paper"
    } else {
        computer = "Scissors"
    }

    return computer;
}

let playerPlay = () => {
    let answer = prompt("Please choose Rock, Paper or Scissors: ").toLowerCase();

    if(answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
        playerPlay();
    }
}

let playRound = (playerSelection = playerPlay(), computerSelection = computerPlay()) => {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Rock") {
                console.log("It's a tie!")
            } else if (computerSelection === "Paper") {
                console.log("Computer Wins! Paper beats Rock,")
            } else {
                console.log("You Win! Rock beats Scissors.")
            }
            break;
        case "paper":
            if (computerSelection === "Rock") {
                console.log("You Win! Paper beats Rock.")
            } else if (computerSelection === "Paper") {
                console.log("It's a tie!")
            } else {
                console.log("Computer Wins! Scissors beats Paper.")
            }
        case "scissors":
            if (computerSelection === "Rock") {
                console.log("Computer Wins! Rock beats Scissors.")
            } else if (computerSelection === "Paper") {
                console.log("You Win! Scissors beats Paper.")
            } else {
                console.log("It's a tie!")
            }
    }
}
