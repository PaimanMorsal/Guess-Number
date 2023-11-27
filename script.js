'use strict';

//document.querySelector(`.number`).textContent = 18;
//document.querySelector('.number').textContent = secreteNumber;

document.querySelector(`.guess`).value = 0;
let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(`.score`).textContent = score;

document.querySelector(`.check`).addEventListener('click', function () {
  const guessNumber = Number(document.querySelector(`.guess`).value);
  console.log(guessNumber);
  if (!guessNumber) {
    document.querySelector('.message').textContent = `No Number!`;
  }
  //win
  else if (guessNumber === secreteNumber) {
    document.querySelector('.message').textContent = `Correct Guess💡!`;
    document.querySelector('body').style.backgroundColor = `green`;
    document.querySelector('.number').style.width = `30rem`;
  }
  //Low
  else if (secreteNumber > guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game!`;
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }
  }
  //High
  else if (secreteNumber < guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game!`;
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }
  }
});

// to reset the game!
document.querySelector(`.again`).addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.guess').value = 0;

  let score = 20;
  document.querySelector(`.score`).textContent = score;

  // const guessNumber = Number(document.querySelector(`.guess`).value);
  // document.querySelector('.number').value = secreteNumber;
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.guess').value = '';
});
