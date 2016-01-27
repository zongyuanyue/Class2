function setup () {
  createCanvas(600,600);
}

function draw() {
  
}

var ballStick = function(x,y, ellipseSize) {
  line(x, y, mouseX, mouseY)
  ellipse(x, y, ellipseSize, ellipseSize)
}