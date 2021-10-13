var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClikedpattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
	playSound(randomChosenColour);
}

$(".btn").click(function(){
	var userChosenColor=$(this).attr("id");
	userClikedpattern=push.(userChosenColor)
	animatePress(userChosenColor);
	playSound(userChosenColor);
});

function playSound(name){
	var audio = new Audio("sounds/"+name+".mp3");
	audio.play();
}

function animatePress(currentColor){
	$("#"+currentColor).addClass("pressed");
	setTimeout(function(){
		$("#"+currentColor).removeClass('pressed');
	 }, 100);

}
