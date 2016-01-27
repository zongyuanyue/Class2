function setup () {
  createCanvas(600,600);
}

function draw() {
  background(255) // White
  for (var x = 0; x < width; x += 20) {
    for (var y = 0; y < height; y +=20) {
      ballStick(x, y, 5);
    }
  }
}

var ballStick = function(x,y, ellipseSize) {
  line(x, y, mouseX, mouseY)
  ellipse(x, y, ellipseSize, ellipseSize)
}