var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}





// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedpattern = [];
//
// $(".btn").click(function(){
// 	var userChosenColor=$(this).attr("id");
// 	userClickedpattern=push.(userChosenColor)
// 	playSound(userChosenColor);
// 	animatePress(userChosenColor);
// });
//
// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
// 	$("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
// 	playSound(randomChosenColour);
// }
//
// function playSound(name){
// 	var audio = new Audio("sounds/"+name+".mp3");
// 	audio.play();
// }
//
// function animatePress(currentColor){
// 	$("#"+currentColor).addClass("pressed");
// 	setTimeout(function(){
// 		$("#"+currentColor).removeClass('pressed');
// 	 }, 100);
//
// }
