export function countdownTime(timer, removeHidden) {
  let countDownDate = new Date().getTime() + 3600000;

  //   // Update the count down every 1 second
  let x = setInterval(function () {
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
      clearInterval(x);
      timer.textContent = 'EXPIRED';
      removeHidden();
    }
  }, 1000);
}
countdownTime();
