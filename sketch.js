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
  var scleraX = 150;
  var scleraY = 250;
  
  this.display = function() {
    
    //white parts of eyes 
    stroke(255);
    fill('white');
    ellipse(scleraX,scleraY,100,100);
    ellipse(scleraX + 200,scleraY,100,100);
  }
  
  this.pupils = function() {
    
    //black parts of eyes 
    stroke(0);
    fill('black');
    ellipse(pupilX,pupilY,50,50);
    ellipse(pupilX + 200,pupilY,50,50);
    
    //how far can the pupils move?
    if (dist(pupilX,pupilY,scleraX,scleraY < 50)) {
      
      //ellipse(scleraX,scleraY,100,100);
      //ellipse(scleraX + 200,scleraY,100,100);
      
      if(mouseX > pupilX && pupilX < scleraX) {
        pupilX = pupilX + 1;
      }
      else if(mouseX < pupilX && pupilX < scleraX) {
        pupilX = pupilX - 1;
      }
      else{
        pupilX;
      }
      if(mouseY > pupilY && pupilY < scleraY) {
        pupilY = pupilY + 1;
      }
      else if(mouseY < pupilY && pupilY < scleraY){
        pupilY = pupilY - 1;
      }
      else{
        pupilY;
      }
    }
  }
}

