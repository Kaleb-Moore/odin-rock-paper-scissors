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
}