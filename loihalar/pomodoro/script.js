// Get the elements from the document
const timer = document.querySelector(".timer");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const workInput = document.querySelector("#work");
const breakInput = document.querySelector("#break");

// Define the variables for the timer logic
let minutes = workInput.value; // The current minutes
let seconds = 0; // The current seconds
let interval; // The interval ID for the timer
let isWork = true; // The flag to indicate if it is a work or break interval
let isRunning = false; // The flag to indicate if the timer is running or not

// Update the timer display with the current minutes and seconds
function updateTimer() {
  timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
}

// Start the timer
function startTimer() {
  if (!isRunning) {
    // If the timer is not running, start it
    isRunning = true; // Set the flag to true
    interval = setInterval(tick, 1000); // Set the interval to call the tick function every second
    startButton.disabled = true; // Disable the start button
    stopButton.disabled = false; // Enable the stop button
    workInput.disabled = true; // Disable the work input
    breakInput.disabled = true; // Disable the break input
    console.log("Timer started"); // Log to the console
  }
}

// Stop the timer
function stopTimer() {
  if (isRunning) {
    // If the timer is running, stop it
    isRunning = false; // Set the flag to false
    clearInterval(interval); // Clear the interval
    startButton.disabled = false; // Enable the start button
    stopButton.disabled = true; // Disable the stop button
    console.log("Timer stopped"); // Log to the console
  }
}

// Reset the timer
function resetTimer() {
  stopTimer(); // Stop the timer if it is running
  minutes = workInput.value; // Reset the minutes to the work input value
  seconds = 0; // Reset the seconds to zero
  isWork = true; // Reset the flag to true
  updateTimer(); // Update the timer display
  workInput.disabled = false; // Enable the work input
  breakInput.disabled = false; // Enable the break input
  console.log("Timer reset"); // Log to the console
}

// Tick the timer
function tick() {
  if (seconds > 0) {
    // If the seconds are not zero, decrement them by one
    seconds--;
  } else {
    // If the seconds are zero, check the minutes
    if (minutes > 0) {
      // If the minutes are not zero, decrement them by one and set the seconds to 59
      minutes--;
      seconds = 59;
    } else {
      // If the minutes are also zero, switch the interval and reset the minutes and seconds
      isWork = !isWork; // Switch the flag
      if (isWork) {
        // If it is a work interval, set the minutes to the work input value and alert the user
        minutes = workInput.value;
        alert("Work time!");
      } else {
        // If it is a break interval, set the minutes to the break input value and alert the user
        minutes = breakInput.value;
        alert("Break time!");
      }
      seconds = 0;
    }
  }
  updateTimer(); // Update the timer display
}

// Add event listeners to the buttons and inputs
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
workInput.addEventListener("change", function () {
  if (!isRunning && isWork) {
    // If the timer is not running and it is a work interval, update the minutes with the input value
    minutes = workInput.value;
    updateTimer();
  }
});
breakInput.addEventListener("change", function () {
  if (!isRunning && !isWork) {
    // If the timer is not running and it is a break interval, update the minutes with the input value
    minutes = breakInput.value;
    updateTimer();
  }
});
