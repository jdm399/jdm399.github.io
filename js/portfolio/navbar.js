function navControl(){
	if (document.getElementById('navBar').style.width == "180px") {
		$("#menuButton").animate({"opacity": 0}, 300, function() {$(this).html("&#9776").animate({"opacity": 1}, 300);});
		$("#navBarContent").animate({opacity : 0},400);
		document.getElementById("main").style.marginLeft = "0px";
		document.getElementById("navBar").style.width = "0px";
		document.getElementById('menuButtonContainer').style.left = "15px";
	} else {
		$("#menuButton").animate({"opacity": 0}, 400, function() {$(this).html("X").animate({"opacity": 1}, 400);});
		$("#navBarContent").animate({opacity : 1},800);
		document.getElementById("main").style.marginLeft = "180px";
		document.getElementById("navBar").style.width = "180px";
		document.getElementById('menuButtonContainer').style.left = "195px";
	}
}