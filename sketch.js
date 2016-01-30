var eyeballs = new Eyeballs();

function setup() {
  createCanvas(500,500);
}

function draw() {
  background('green');
  
  eyeballs.display();
  eyeballs.pupils();
}


//Constructor
function Eyeballs(x,y) {
  
  //pupil movement:
  var pupilX;
  var pupilY;
  
  this.display = function() {
    
    //white parts of eyes 
    stroke(255);
    fill('white');
    ellipse(150,250,100,100);
    ellipse(350,250,100,100);
  }
  this.pupils = function() {
    
    //black parts of eyes 
    fill('black');
    ellipse(150,250,50,50);
    ellipse(350,250,50,50);
    
    //how far can the pupils move?
    if(mouseX > pupilX) {
      pupilX = pupilX + 1;
    }
    else {
      pupilX = pupilX - 1;
    }
    if(mouseY > pupilY) {
      pupilY = pupilY + 1;
    }
    else {
      pupilY = pupilY - 1;
    }
  }
}

var leftEye = new Eyeballs();
var rightEye = new Eyeballs();

function mouseMove() {
  leftEye.pupils();
  rightEye.pupils();
  
}