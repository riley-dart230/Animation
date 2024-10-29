let x = 0;
function setup() {
  createCanvas(400, 400);  
}
function draw() {
 drawDesert();
}

function drawDesert(){
    background(130,200,255); 
  
  //ground
  fill(255,205,120); 
  noStroke();
  rect(0,height-50,width,50);
  
  //sun
  fill(255,255, 100);
  ellipse(100,x,100,100);
  
  x = x + 1 
  
  if (x > 400)
  
      {
      x=0;
      }
  //FACE FOR THE SUN
  push();
    translate(100,x,100);
    rotate(-PI/14);
    fill(3,3, 3);
    stroke(0);
    ellipse(-20,-15,5,5);
    ellipse(20,-15,5,5);
    noFill()
    arc(0,0,90,60,PI/8, 7*PI/8);
    
  pop();
  
  //cactus
  fill(140,175,40);
  rect(250,200,30,160,15,15,4,4);
  rect(220,215,25,60,15,15,0,0);
  rect(220,275,35,25,0,0,0,25);
  rect(285,225,25,60,15,15,0,0);
  rect(270, 285, 40, 25, 0, 0, 25, 0);
  
  //cloud
 fill(255);  
  ellipse(x, 50, 60, 60);        
  ellipse(x - 35, 50, 50, 50);   
  ellipse(x + 35, 50, 50, 50);  

  if (x > width - 30 || x < 30) {
  
  }
  
}