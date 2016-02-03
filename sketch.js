var col = 0
var r = 0;
var b = 0;
function setup() {
  createCanvas(600,400);
}


function draw() {
  



  
  col = map(mouseX,0,600,0,255);
  background(mouseY,col,mouseX);
  fill(250,118,222);
  ellipse(mouseX,mouseY,64,64,64);
  rect(550,50,50,300);
  rect(280,100,40,40);
  rect(250,160,100,10);
  ellipse(300,180,40,80);
  ellipse(310,250,20,60);
  ellipse(290,250,20,60);
     if (dist(250,250,mouseX,mouseY)<100){
     line(0,0,600,400);
      line(0,400,600,0);
     }
     if (mouseX>500){
        fill(random,random,random);
     ellipse(300,200,500,500);
      rect(160,170,150,60);
      rect(330,170,150,60);
      ellipse(330,320,100,100);
     
}
}
