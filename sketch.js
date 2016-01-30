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
  var pupilX = 150;
  var pupilY = 250;
  
  this.display = function() {
    
    //white parts of eyes 
    stroke(255);
    fill('white');
    ellipse(150,250,100,100);
    ellipse(350,250,100,100);
  }
  this.pupils = function() {
    
    //black parts of eyes 
    stroke(0);
    fill('black');
    ellipse(pupilX,pupilY,50,50);
    ellipse(pupilX + 200,pupilY,50,50);
    
    //how far can the pupils move?
    function dist(pupilX,pupilY,scleraX,scleraY) {
      
      var scleraX = 150;
      var scleraY = 250;
      
      if(mouseX > pupilX && pupilX <= (scleraX + 25)) {
      pupilX = pupilX + 1;
      }
      if(mouseX{
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
}

var leftEye = new Eyeballs();
var rightEye = new Eyeballs();

function mouseMove() {
  leftEye.pupils();
  rightEye.pupils();
  
}