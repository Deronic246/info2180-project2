//Extra feature: Multiple Backgrounds
window.onload = function(){
	var puzzle = document.getElementById("puzzlearea");
	var pieces = puzzle.getElementsByTagName("div");
	var emptyTop = 300;
	var eLeft = 300;
	var positionTop = 0;
	var leftposition = 0;
	var oldTop;
	var oldLeft;
	var shufflePiece;
	var backgroundLeft = 0;
	var backgroundTop = 0;
	var shuffles = [];
	var shuffleTimes = 1000;
	var div_control = document.getElementById("controls");
	var select = document.createElement("select");
    var change_image = document.createElement("button");
    var options = ["Daredevil", "Elektra", "Punisher"];
	var background_value = Math.floor(Math.random()*options.length);
    var image = options[background_value];

    //changes image on game
    for(var index=0; index < pieces.length;index++){

        if(image === "Punisher"){
			pieces[index].style.backgroundImage = "url(background.jpg)";
		}
        if(image === "Daredevil"){
			pieces[index].style.backgroundImage = "url(Daredevil.jpg)";
        }
        if(image === "Elektra"){
			pieces[index].style.backgroundImage = "url(Elektra.jpg)";
        }
    }
   