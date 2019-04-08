let playerChoice1 = document.querySelector('.rock');
let playerChoice2 = document.querySelector('.paper');
let playerChoice3 = document.querySelector ('.scissors');
let playerScore = document.querySelector('.pscore');
let computerScore = document.querySelector('.cscore');
let playerChoice = '';
let pScore = 0;
let cScore = 0;
playerScore.textContent = pScore;
computerScore.textContent = cScore;
let pPlay = document.createElement('img');
let cPlay = document.createElement('img');
let showPlayer = document.querySelector('.playerchoice');
let showComputer = document.querySelector('.cpuchoice');

function computerPlay(number) {
    switch (number) {
        case 1:
        number = 'rock';
        break;

        case 2:
        number = 'paper';
        break;

        case 3:
        number = 'scissors';
        break;
    }
    return cpu = number;
}

function game() {
    let computer = Math.floor((Math.random() * 3)) + 1;
    computerPlay(computer);

    if (playerChoice === 'rock') {
        pPlay.src = './images/rock.jpg';
    } else if (playerChoice === 'paper') {
        pPlay.src = './images/paper.jpg';
    } else {
        pPlay.src = './images/scissors.jpg';
    }

    if (cpu === 'rock') {
        cPlay.src = './images/rock.jpg';
    } else if (cpu === 'paper') {
        cPlay.src = './images/paper.jpg';
    } else {
        cPlay.src = './images/scissors.jpg';
    }

    showPlayer.appendChild(pPlay);
    showComputer.appendChild(cPlay);

    if (playerChoice === 'rock' && cpu === 'scissors' ||
    playerChoice === 'scissors' && cpu === 'paper' ||
    playerChoice === 'paper' && cpu === 'rock') {
        pScore++;
        playerScore.textContent = pScore;
    } else if (cpu === 'rock' && playerChoice === 'scissors' ||
    cpu === 'scissors' && playerChoice === 'paper' ||
    cpu === 'paper' && playerChoice === 'rock') {
        cScore++;
        computerScore.textContent = cScore;
    }

    if (pScore === 5 || cScore === 5) {
        showPlayer.appendChild(pPlay);
        showComputer.appendChild(cPlay);
        if (pScore > cScore) {
            alert('Player wins the match by ' + pScore + ' x ' + cScore + '!');
        } else {
            alert('The computer wins the match by ' + cScore + ' x ' + pScore + '!');
        }
        pScore = 0;
        cScore = 0;
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
}

playerChoice1.addEventListener('click', () => {
    playerChoice = 'rock';
    game(playerChoice);
});

playerChoice2.addEventListener('click', () => {
    playerChoice = 'paper';
    game(playerChoice);
});

playerChoice3.addEventListener('click', () => {
    playerChoice = 'scissors';
    game(playerChoice);
});