let sands = [];
let grounded = [];
let width = 500;
let height = 500;
const sandSize = 5;

function setup() {
	createCanvas(width, height)

	for(var i = 0; i <= height; i++) {
		sands[i] = [];
	}
	for(var i = 0; i < sands[height].length; i++) {
		sands[height][i] = true;
	}

	background(60);
}

function draw() {
	background(230,230,255)

	if(mouseX != 0) {
		sands[mouseY][mouseX] = true;
	}

	updateSands();
	drawSand();
}

function drawSand() {
	noStroke();

	for (var i = 0; i < height; i++) {
		for (var j = 0; j < sands[i].length; j++) {
			if(sands[i][j] == true) {
				ellipse(j,i, sandSize, sandSize);
			}
		}
	}

}

function updateSands() {

	for (var i = height-2; i >= 0 ; i--) {
		for (var j = 0; j < width; j++) {
			if (sands[i][j] == true) {
				if(sands[i+1][j] != true) {
					sands[i+1][j] = true;
					sands[i][j] = false;
				}
				else if (sands[i+1][j-1] != true && sands[i+1][j+1] == true) {
					sands[i+1][j-1] = true;
					sands[i][j] = false;
					//console.log("Left switch");
				}
				else if (sands[i+1][j-1] == true && sands[i+1][j+1] != true) {
					sands[i+1][j+1] = true;
					sands[i][j] = false;
					//console.log("Right switch");
				}
				else if (sands[i+1][j-1] != true && sands[i+1][j+1] != true) {
					sands[i+1][(int)(j+(random(-1,1)))] = true;
					sands[i][j] = false;
					//console.log("Random switch");
				}
			}
		}
	}
}
