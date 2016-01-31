//for that constructor:
var eyeballs = new Eyeballs();

//global variables:
var X;
var Y;
var nextX; //updated X and Y 
var nextY;

function setup() {
  createCanvas(500,500);

  X = width / 2;
  Y = height / 2;
  nextX = X;
  nextY = Y; 
}

function draw() {
  background('green');
  
  eyeballs.display();
  eyeballs.movement();
}


//Constructor
function Eyeballs() {
  
  this.display = function() {
    
  fill('white');
  ellipse(X,Y,500,500);
  
  fill('black');
  noStroke();
  frameRate(15);
  ellipse(X,Y,200,200);

  
  X = X + (nextX - X);
  Y = Y + (nextY - Y);
  }
  
  this.movement = function() {
    function mouseMoved(){
      nextX = mouseX;
      nextY = mouseY; 
    }
  }
}

