//  This code will run as soon as the page loads.
window.onload = function () {
  reset();
  start();
  count();
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockoutId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 1;
//global variables stored;

function reset() {

  time = 59;
  lap = 1;

  $("#display").text('00:59')
}

function EndGame() {

  time = 59;
  lap = 1;

  $("#display").text(score)
}


function start() {

  //  TODO: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {

    intervalId = setInterval(count, 1000);
    clockRunning = true;

    clockoutId = setInterval(Submit, 59000);

  }

}
function stop() {

  if (clockRunning === true) {

    clearInterval(intervalId);
    clockRunning = false;
  }
}

function count() {
  //  increment time by 1, remember we cant use "this" here.
  time--;
  // console.log(time)

  //  Get the current time, pass that into the timeConverter function,
  //  and save the result in a variable.
  var timeStr = timeConverter(time)
  //  Use the variable you just created to show the converted time in the "display" div.
  $("#display").text(timeStr);
  //   console.log(timeStr);
}

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


$('.Question0').on('change', function () {
  $(this).siblings('input:checkbox').prop('checked', false);
});

$('.Question1').on('change', function () {
  $(this).siblings('input:checkbox').prop('checked', false);
});

$('.Question2').on('change', function () {
  $(this).siblings('input:checkbox').prop('checked', false);
});

$('.Question3').on('change', function () {
  $(this).siblings('input:checkbox').prop('checked', false);
});



var Q0a = document.getElementById("Question0a");
var Q0b = document.getElementById("Question0b");
var Q0c = document.getElementById("Question0c");

var Q1a = document.getElementById("Question1a");
var Q1b = document.getElementById("Question1b");
var Q1c = document.getElementById("Question1c");

var Q2a = document.getElementById("Question2a");
var Q2b = document.getElementById("Question2b");
var Q2c = document.getElementById("Question2c");

var Q3a = document.getElementById("Question3a");
var Q3b = document.getElementById("Question3b");
var Q3c = document.getElementById("Question3c");



var score = 0;
function Submit() {

  stop()
  // console.log(Q0b.checked)
  // console.log(Q0a.checked)
  // console.log(Q0c.checked)
  if (Q0b.checked == true) {
    score = score + 10
  }


  if (Q1a.checked == true) {
    score = score + 10
  }


  if (Q2b.checked == true) {
    score = score + 10
  }

  if (Q3c.checked == true) {
    score = score + 10
  }
  // console.log(score)
  var Perc = (score / 40) * 100;
  $("#display").text(Perc + "%")


  clearInterval(clockoutId)
};