let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
      displayMessage('Input Number!');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('You guessed right!');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    highscore++;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
      // when guess is wrong
  else if (guess!== secretNumber) {
       if (score > 1) {
         document.querySelector('.message').textContent = guess> secretNumber ? 'Too high!' : 'Too low!';
         score--;
         document.querySelector('.score').textContent = score;
       } else {
         displayMessage('You lost the game!');
         document.querySelector('.score').textContent = 0;
       }
    };
 });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = 'black';
});
