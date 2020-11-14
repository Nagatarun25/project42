var hr,mn,sc

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0);  
  drawSprites();

  hr=hour();
  mn=minutes();
  sc=seconds();

  angleMode(DEGREES);

     scAngle = map(sc,0, 60, 0, 360)
     mnAngle = map(sc,0, 60, 0, 360)
     hrAngle = map(sc,0, 60, 0, 360)
     
   

   push();
   rotate(scAngle)
   translate(0);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0)

   rotate(mnAngle)
   translate(0);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0)

   rotate(hrAngle)
   translate(0);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0)
   
   pop();
  
  
}

function hour(){
let h=hour();
text('Current hour:\n' + h, 100, 50);
}

function minutes(){
  let m=minute();
text('Current minute: \n' + m, 200, 50);
}

function seconds(){
  let s = second();
text('Current second: \n' + s, 300, 50);
}