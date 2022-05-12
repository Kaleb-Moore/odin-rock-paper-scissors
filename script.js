let computerScore = 0;
let playerScore = 0;
let counter = 0;
let playerClicked = document.querySelectorAll('button');
let results = document.createElement('div');
let body = document.querySelector('body');
let score = document.createElement('div');

playerClicked.forEach(item => {
    item.addEventListener('click', e => {
        choice = e.target.innerText;
        playRound(choice);
        score.innerText = `Score: ${playerScore}-${computerScore}`;
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
                results.innerText = "It's a tie!";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                counter++;
            } else if (computerSelection === "Paper") {
                results.innerText = "Computer Wins! Paper beats Rock,";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                computerScore++;
                counter++;
            } else {
                results.innerText = "You Win! Rock beats Scissors.";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                playerScore++;
                counter++;
            }
            break;
        case "paper":
            if (computerSelection === "Rock") {
                results.innerText = "You Win! Paper beats Rock.";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                playerScore++;
                counter++;
            } else if (computerSelection === "Paper") {
                results.innerText = "It's a tie!";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                counter++;
            } else {
                results.innerText = "Computer Wins! Scissors beats Paper.";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                computerScore++;
                counter++;
            }
            break;
        case "scissors":
            if (computerSelection === "Rock") {
                results.innerText = "Computer Wins! Rock beats Scissors.";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                computerScore++;
                counter++;
            } else if (computerSelection === "Paper") {
                results.innerText = "You Win! Scissors beats Paper.";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                playerScore++;
                counter++;
            } else {
                results.innerText = "It's a tie!";
                body.append(results);
                score.innerText = `Score: ${playerScore}-${computerScore}`;
                body.append(score);
                counter++;
            }
            break;
    }

    if (counter == 5) {
        if (playerScore > computerScore) {
            results.innerText = "You win the game!";
            body.append(results);
            score.innerText = `Score: ${playerScore}-${computerScore}`;
            body.append(score);
            reset();
        } else if (computerScore > playerScore) {
            results.innerText = "Computer Wins the game!";
            body.append(results);
            score.innerText = `Score: ${playerScore}-${computerScore}`;
            body.append(score);
            reset();
        } else {
            results.innerText = "It's a tie! No one wins!";
            body.append(results);
            score.innerText = `Score: ${playerScore}-${computerScore}`;
            body.append(score);
            reset();
        }
    }
}

let reset = () => {
    playerScore = 0;
    computerScore = 0;
    counter = 0;
}

