window.onload = init;
function init() {
	var map = document.getElementById("map");

}

function showCoords(eventObj) {
	var coords = document.getElementById("coords");


	coords.innerHTML = "Map coordinates: " + x + ", " + y;
}

//setTimeout
function timeHandler() {
	alert("HEY! What are you doing? Just gonna stare at a THE SCREEN?! MOVE MOUSE");
}
setTimeout(timeHandler, 5000)//in milliseconds