// Var set for Today's date and time using Moment.js

var todaysDate = moment().format("dddd, MMM Do YYYY", "");
var currentTime = moment().format("HH:mm:ss");

//Displays current date and time

$("#currentDay").html(todaysDate + currentTime);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textEntry = $(this).siblings(".description").val();
    var timeOfEntry = $(this).parent().attr("id");

    localStorage.setItem(timeOfEntry, textEntry);
  });

  function timeTracking() {
    var timeNow = moment().hour();


  //Add and Remove color coding for past, present, and future events

  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

    //Recall items from local storage

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
  
      //call app

      timeTracking();
    });