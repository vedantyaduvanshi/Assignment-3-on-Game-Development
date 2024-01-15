var firstNumber = Math.round(Math.random() * 100);
const firstNumberBox = document.getElementById("number1");

var secondNumber = Math.round(Math.random() * 100);
const secondNumberBox = document.getElementById("number2");

var operation;
var score = 0;
const addition = document.getElementById("plus");
const subtraction = document.getElementById("minus");
const multiplication = document.getElementById("mul");
const division = document.getElementById("divide");
const remainder = document.getElementById("modulus");

var resultBox = document.getElementById("number3");
var result;

function randomize() {
  firstNumber = Math.round(Math.random() * 100);
  secondNumber = Math.round(Math.random() * 100);

  if (firstNumber < secondNumber) {
    var extra = firstNumber;
    firstNumber = secondNumber;
    secondNumber = extra;
  }

  operation = Math.round(Math.random() * 5);
  switch (operation) {
    case 1:
      result = firstNumber + secondNumber;
      break;

    case 2:
      result = firstNumber - secondNumber;
      break;

    case 3:
      result = firstNumber * secondNumber;
      break;

    case 4:
      result = Math.floor(firstNumber / secondNumber);
      break;

    case 5:
      result = firstNumber % secondNumber;
      break;

    case 0:
      randomize();
  }

  firstNumberBox.innerHTML = firstNumber;
  secondNumberBox.innerHTML = secondNumber;
  resultBox.innerHTML = result;

  console.log(firstNumber + " " + secondNumber + " " + result + " " + operation);
}

randomize();

addition.onclick = () => {
  if (firstNumber + secondNumber === result) {
    score++;
    randomize();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

subtraction.onclick = () => {
  if (firstNumber - secondNumber === result) {
    score++;
    randomize();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

multiplication.onclick = () => {
  if (firstNumber * secondNumber === result) {
    score++;
    randomize();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

division.onclick = () => {
  if (Math.floor(firstNumber / secondNumber) === result) {
    score++;
    randomize();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

remainder.onclick = () => {
  if (firstNumber % secondNumber === result) {
    score++;
    randomize();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

var time = 20;
var timerId;

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
