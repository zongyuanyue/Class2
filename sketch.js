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
  //this.pupil movement:
  scleraX = 150;
  scleraY = 250;
  scleraSize = 100;
  pupilX = 150;
  pupilY = 250;
  pupilSize = scleraSize / 2;

  //white parts of eyes
  this.display = function() {
    stroke(255);
    fill('white');
    ellipse(scleraX,scleraY,scleraSize,scleraSize);
    ellipse(scleraX + 200,scleraY,scleraSize,scleraSize);
  }

  this.pupils = function() {
    var currentDist = dist(pupilX,pupilY,scleraX,scleraY);
    //black parts of eyes
    stroke(0);
    fill('black');
    ellipse(pupilX,pupilY,pupilSize,pupilSize);
    ellipse(pupilX + 200,pupilY,pupilSize,pupilSize);

    if(mouseX > pupilX && pupilX < scleraX + pupilSize / 2) {
      pupilX = pupilX + 1;
    }
    if(mouseX < pupilX && pupilX > scleraX - pupilSize / 2) {
      pupilX = pupilX - 1;
    }
    if(mouseY > pupilY && pupilY < scleraY + pupilSize / 2) {
      pupilY = pupilY + 1;
    }
    if(mouseY < pupilY && pupilY > scleraY - pupilSize / 2){
      pupilY = pupilY - 1;
    }
  }

}
