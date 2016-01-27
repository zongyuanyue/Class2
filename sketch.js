function setup () {
  createCanvas(600,600);
}

function draw() {
  background(255) // White
  for (var x = 0; x < width; x += 20) {
    for (var y = 0; y < height; y +=20) {
      new BallStick(x,y, howFar(x,y))
    }
  }
}

var BallStick = function(x,y, ellipseSize) {
  // line(x, y, mouseX, mouseY)
  ellipse(x, y, ellipseSize, ellipseSize)
}

function howFar(p1,p2) {
  return dist(p1, p2, mouseX, mouseY) / (width /40) ;
}
