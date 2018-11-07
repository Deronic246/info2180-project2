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
    //creates drop-down menu of images
    for(var index=0;index<options.length;index++){
        var option = document.createElement("option");
        option.text = options[index];
        select.add(option);
    }
    div_control.appendChild(select);
    change_image.innerHTML = "Change Image";
    div_control.appendChild(change_image);

    change_image.addEventListener("click",function(){
		for(var index=0;index<pieces.length;index++){
			var choice = select.options[select.selectedIndex];
    
            if(choice.text === "Punisher"){
                pieces[index].style.backgroundImage = "url(background.jpg)";
            }
            if(choice.text === "Daredevil"){
                pieces[index].style.backgroundImage = "url(Daredevil.jpg)";
            }
            if(choice.text === "Elektra"){
                pieces[index].style.backgroundImage = "url(Elektra.jpg)";
            }
		}
	});


	//sets up board
	for(var i=0; i < pieces.length; i++){
		pieces[i].className = "puzzlepiece";
		pieces[i].style.top =  positionTop + "px";
		pieces[i].style.left = leftposition + "px";
		pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px";
		pieces[i].onclick= move;
		pieces[i].onmouseover= movable;

		if(leftposition < 300){
			leftposition = leftposition + 100;
			backgroundLeft = backgroundLeft - 100;
		}
		else{
			leftposition = 0;
			backgroundLeft = 0;
			positionTop = positionTop + 100;
			backgroundTop = backgroundTop - 100;
		}	
	}

	
	//checks if piece is povable and if so it adds movable style to it and if not removes movable style from it
	function movable(){
		oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		if (oldTop == emptyTop && oldLeft == (eLeft-100) || oldTop == emptyTop && oldLeft == (eLeft+100) || oldTop == (emptyTop-100) && oldLeft == eLeft || oldTop == (emptyTop+100) && oldLeft == eLeft){
			$(this).addClass('movablepiece');	
		}
		else{
			$(this).removeClass("movablepiece");
		}
	}

	//moves puzzle piece
	function move(){
		oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		if (oldTop == emptyTop && oldLeft == (eLeft-100) || oldTop == emptyTop && oldLeft == (eLeft+100) || oldTop == (emptyTop-100) && oldLeft == eLeft || oldTop == (emptyTop+100) && oldLeft == eLeft){
			this.style.top = emptyTop + "px";
			this.style.left = eLeft + "px";
			emptyTop = oldTop;
			eLeft = oldLeft;
		}
	}

	
	function getStyle(top, left){
		for(var i =0; i < pieces.length; i++){
			if(pieces[i].style.top==top && pieces[i].style.left==left){
				shufflePiece = pieces[i];
				return shufflePiece;		
			}
		}
	}

	//shuffles puzzle pieces
	function Shuffle(){
		for(var c = 0; c < shuffleTimes; c++){
			var choice = Math.floor (Math.random () * 4);
			console.log(choice);
			if ( choice == 0) {
				(getStyle((emptyTop-100)+"px", eLeft+"px"))|| getStyle((emptyTop+100)+"px", eLeft+"px");
				oldTop = parseInt(shufflePiece.style.top);
 				oldLeft = parseInt(shufflePiece.style.left);
 				shufflePiece.style.top = emptyTop + "px";
 				shufflePiece.style.left = eLeft + "px";
				emptyTop = oldTop;
 				eLeft = oldLeft;
 			