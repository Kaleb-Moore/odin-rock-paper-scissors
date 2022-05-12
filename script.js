let computerScore = 0;
let playerScore = 0;
let counter = 0;
let playerClicked = document.querySelectorAll('button');

playerClicked.forEach(item => {
    item.addEventListener('click', e => {
        choice = e.target.innerText;
        playRound(choice)
    })
})


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

let playRound = (playerSelection, computerSelection = computerPlay()) => {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Rock") {
                console.log("It's a tie!");
                counter++;
            } else if (computerSelection === "Paper") {
                console.log("Computer Wins! Paper beats Rock,");
                computerScore++;
                counter++;
            } else {
                console.log("You Win! Rock beats Scissors.");
                playerScore++;
                counter++;
            }
            break;
        case "paper":
            if (computerSelection === "Rock") {
                console.log("You Win! Paper beats Rock.");
                playerScore++;
                counter++;
            } else if (computerSelection === "Paper") {
                console.log("It's a tie!");
                counter++;
            } else {
                console.log("Computer Wins! Scissors beats Paper.");
                computerScore++;
                counter++;
            }
            break;
        case "scissors":
            if (computerSelection === "Rock") {
                console.log("Computer Wins! Rock beats Scissors.");
                computerScore++;
                counter++;
            } else if (computerSelection === "Paper") {
                console.log("You Win! Scissors beats Paper.");
                playerScore++;
                counter++;
            } else {
                console.log("It's a tie!");
                counter++;
            }
            break;
    }

    if (counter == 5) {
        if (playerScore > computerScore) {
            console.log("You win the game!")
            reset();
        } else if (computerScore > playerScore) {
            console.log("Computer Wins the game!")
            reset();
        } else {
            console.log("It's a tie! No one wins!")
            reset();
        }
    }
}

let reset = () => {
    playerScore = 0;
    computerScore = 0;
    counter = 0;
}