var hr,mn,sc,scAngle;
function setup() {
  createCanvas(800,400);
  
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  
}

function draw() {
  background(255,255,255);
  push ();
  stroke (255,0,0);
  strokeWeight(7);
  line (0,0,100,0);
  rotate (scAngle);
  translate (0,0);
  arc (100,100,90,0,2*PI)
  pop ();
  drawSprites();
}