//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {
    reset();
    start();
    count();
//   $("#lap").on("click", recordLap);
//   $("#stop").on("click", stop);
//   $("#reset").on("click", reset);
//   $("#start").on("click", start);
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

  //  TODO: Change the "display" div to "00:00."
  // $("#display").html("<div> 00:00 </div>");
  $("#display").text('00:59')
}

function EndGame() {

    time = 59;
    lap = 1;
  
    //  TODO: Change the "display" div to "00:00."
    // $("#display").html("<div> 00:00 </div>");
    $("#display").text(score)
  }


function start() {

  //  TODO: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {

    

    intervalId = setInterval(count,1000);
    clockRunning = true;


    clockoutId = setInterval(Submit,59000);
    
  }

}
function stop () {

  if (clockRunning===true){

  clearInterval(intervalId);
  clockRunning = false;

  //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
}
}

// function recordLap() {

//   //  TODO: Get the current time, pass that into the timeConverter function,
//   //        and save the result in a variable.
// var lapTime = timeConverter(time);

// $('#laps').append("<div>  Lap" + lap + ':' + lapTime + "</div>");
//   //  TODO: Add the current lap and time to the "laps" div.
// lap++;
//   //  TODO: Increment lap by 1. Remember, we can't use "this" here.
// }
function count() {

  //  TODO: increment time by 1, remember we cant use "this" here.
time--;
// console.log(time)

  //  TODO: Get the current time, pass that into the timeConverter function,
  //        and save the result in a variable.
var timeStr = timeConverter(time)
  //  TODO: Use the variable you just created to show the converted time in the "display" div.
  $("#display").text(timeStr);
//   console.log(timeStr);



}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

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


$('.Question0').on('change', function() {
    // $('.productliest').not(this).prop('checked', false);
    $(this).siblings('input:checkbox').prop('checked', false);
    // .not(this).prop('checked', false);
});


$('.Question1').on('change', function() {
    // $('.productliest').not(this).prop('checked', false);
    $(this).siblings('input:checkbox').prop('checked', false);
    // .not(this).prop('checked', false);
});

$('.Question2').on('change', function() {
    // $('.productliest').not(this).prop('checked', false);
    $(this).siblings('input:checkbox').prop('checked', false);
    // .not(this).prop('checked', false);
});


$('.Question3').on('change', function() {
    // $('.productliest').not(this).prop('checked', false);
    $(this).siblings('input:checkbox').prop('checked', false);
    // .not(this).prop('checked', false);
});



var Q0a = document.getElementById("Question0a");
var Q0b = document.getElementById("Question0b");
var Q0c = document.getElementById("Question0c");

var Q1a= document.getElementById("Question1a");
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

    stop ()
console.log(Q0b.checked)
console.log(Q0a.checked)
console.log(Q0c.checked)
if (Q0b.checked==true){
    score = score + 10
}


if (Q1a.checked==true){
    score = score + 10
}


if (Q2b.checked==true){
    score = score + 10
}

if (Q3c.checked==true){
    score = score + 10
}
console.log(score)
var Perc = (score/40)*100;
$("#display").text(Perc + "%" )


clearInterval(clockoutId)
};