/*needs to make each "cell" iterate through HSL colors  */

function randomColor() {
	var newHue = Math.floor(Math.random() * 361);
	var newSat = Math.floor(Math.random() * 101);
	var newLight = Math.floor(Math.random() * 101);
	var newAlpha = Math.random();
	return "hsla("+ newHue + ", " + newSat + "%, " + newLight + "%, "  +"1)";
}


setInterval (function() {
$('.matrix li').each(function() {
	$(this).css("background-color", randomColor())}, 1000);
});

