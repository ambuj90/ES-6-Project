'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = '15';
document.querySelector('.score').textContent = '10';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = '23';*/


const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";

        // when input a higher value
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Loose the Game';
            document.querySelector('.score').textContent = 0;
        }

        // when input a lower value
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Loose the Game';
            document.querySelector('.score').textContent = 0;
        }


    }


});

document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";

    document.querySelector('.message').textContent = 'Start guessing...';
});