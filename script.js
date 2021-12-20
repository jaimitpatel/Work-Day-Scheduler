$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".desc").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  console.log("current time is", currentTime)
  console.log("current date is", currentDay)
  


  $("#time8 .desc").val(localStorage.getItem("time8"));
  $("#time9 .desc").val(localStorage.getItem("time9"));
  $("#time10 .desc").val(localStorage.getItem("time10"));
  $("#time11 .desc").val(localStorage.getItem("time11"));
  $("#time12 .desc").val(localStorage.getItem("time12"));
  $("#time13 .desc").val(localStorage.getItem("time13"));
  $("#time14 .desc").val(localStorage.getItem("time14"));
  $("#time15 .desc").val(localStorage.getItem("time15"));
  $("#time16 .desc").val(localStorage.getItem("time16"));



  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY , h:mm:ss a"));
  $("currentTime").text(moment().format("h:mm:ss a"));

 
  var today = new Date();
  var currentTime = today.getHours();
  var currentHour= moment().hour();

  


  function ChangeColour() {
    var currentTime = today.getHours();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("time")[1]);
      if (blockTime < currentTime) {
        $(this).addClass("past");
      } 
      else if (blockTime === currentTime) {
        $(this).removeClass("past").addClass("present");
      } 
      else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }
  
  ChangeColour();
});
