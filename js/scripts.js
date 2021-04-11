
var vidcapture, ctracker, drawcanvas;
var outerDiam = 0;


function setup() {
	var cnv = createCanvas(windowWidth/2, windowHeight/2);
	cnv.parent("p5canvas");

	// p5 method for creating a video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width/2, vidcapture.height/2);
	vidcapture.hide()

	//start the tracker
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt);

	// just for testing
	drawcanvas = document.getElementById('defaultCanvas0')
}

function draw() {

	background(0, 10)
	translate(vidcapture.width, 0)
	scale(-1, 1)

	var position = ctracker.getCurrentPosition();

	if (position) {
		// ctracker.draw(drawcanvas)
		position.forEach(function(pos) {
  			var r = map(position[62][0], 0,  width, 0, 255, true);
  			var b = map(position[62][1], 0, height, 0, 255, true);
				noStroke()
				fill(r, 0, b)
				ellipse(pos[0],pos[1], 9);
		var xRotate = map(mouseX, 0, width, 0, 90)
		angleMode(DEGREES)
		rotate(xRotate);
  		})
  			//Ripple effect - for reals slow in browser	
		for (var i = 0; i < 5; i++){
			var diam = outerDiam - 30 * i; 
				if (diam > 0){
		      		var fade = map(diam, 0, width, 0, 255, true);
					stroke(fade);
		      		noFill();
		     		 ellipse(mouseX, mouseY, diam);
   					 }
  			}
  		outerDiam = outerDiam + 5;
	}
}