'use strict';

const drankWater = document.querySelector('.counter-number');
const btnWater = document.querySelector('.button-water');
const btnSkip = document.querySelector('.button-skip');
const timer = document.querySelector('.timer');
const date = document.querySelector('.date');
const reminder = document.querySelector('.reminder');
const weightInput = document.getElementById('weight');
let counter = 0;
let timerInterval;

/// DESC Dodawanie szklanek do wypitej wody po kliknięciu btnWater

function addWater() {
  counter = counter + 250;
  drankWater.textContent = counter;
}
btnWater.addEventListener('click', addWater);

// BUG;
function removeHidden() {
  reminder.classList.remove('hidden');
  reminder.textContent;
}
///FUNKCJA LICZNIK

function countdownTime(timer, removeHidden) {
  let countDownDate = new Date().getTime() + 1000 * 60 * 60 + 5; // offset for floor

  clearInterval(timerInterval);

  function updateTimer() {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"

    timer.textContent = hours + 'h ' + minutes + 'm ' + seconds + 's ';
    // document.getElementById('demo').innerHTML =
    //   hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(timerInterval);
      timer.textContent = 'EXPIRED';
      removeHidden();
      return;
    }
  }
  // intervalFunc();
  //   // Update the count down every 1 second
  timerInterval = setInterval(updateTimer, 1000);
}

countdownTime(timer, removeHidden);

btnSkip.addEventListener('click', function () {
  // btnWater.textContent = 'blabla';
  timer.textContent = '1h 0m 0s';
  countdownTime(timer, removeHidden);
});

weightInput.addEventListener('change', function (event) {
  console.log(event.target.value);
});
