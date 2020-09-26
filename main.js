let initialLocX;
let movePoint;
let loopLocX = 0;
let size = 10

function setup() {
	frameRate(1)
	createCanvas(1800, 1200);
	background(51);
	initialLocX = size / 2;
	ellipse(initialLocX, height * 0.5, size)
	movePoint = initialLocX * 3
	// noLoop();
	noStroke();
}

function draw() {
	fill(255);

	size *= 2;

	if (frameCount === 1) {
		loopLocX = initialLocX + movePoint;
	}else{
		loopLocX = loopLocX + movePoint;
	}

	ellipse(loopLocX, height * 0.5, size)

	movePoint *= 2;
}


