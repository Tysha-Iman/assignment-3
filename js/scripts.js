
var vidcapture, ctracker, drawcanvas;

function setup() {
	var cnv = createCanvas(windowWidth/2, windowHeight/2);
	cnv.parent("p5canvas");

	// p5 method for creating a video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*2, vidcapture.height*3);
	vidcapture.hide()

	//start the tracker
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt);

	// just for testing
	drawcanvas = document.getElementById('defaultCanvas0')
}

function draw() {

	background(0, 50)
	translate(vidcapture.width, 0)
	scale(-1, 1)

	// image(vidcapture, 0, 0);

	var position = ctracker.getCurrentPosition();

	
	if (position) {
		position.forEach(function(pos) {

  		var r = map(position[62][0], 210, 480, 0, 255, true);
  		var b = map(position[62][1], 98, 200, 0, 255, true);
	
		noStroke()
		fill(r, 0, b)
		ellipse(pos[0],pos[1], 9);

		var xRotate = map(mouseX, 0, width, 0, 20)

		angleMode(DEGREES)
		rotate(xRotate);
		// line(0, 0, 50, 50)
		})
	}
}