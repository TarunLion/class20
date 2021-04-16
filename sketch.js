
var a, b;
var moving,fixed;

function setup() {
  createCanvas(800,400);
 /* = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
 b = createSprite(500,150,50,70);
  b.shapeColor = "black";*/
  moving =createSprite(300,200,50,60);
  moving.shapeColor = "blue";
  fixed=createSprite(400,250,50,80);
  fixed.shapeColor="orange";

}

function draw() {
  background("red");  
 // b.x = mouseX;
 // b.y = mouseY;

moving.x = World.mouseX;
moving.y = World.mouseY;


 /* if (a.x - b.x < b.width/2+a.width/2 && b.x-a.x < a.width/2+b.width/2 &&
    a.y - b.y < b.height/2+a.height/2 && b.y-a.y < a.height/2+b.height/2 ){
    a.shapeColor = "white";
    b.shapeColor = "yellow";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "black";
  }*/

if(moving.x - fixed.x < moving.width/2+fixed.width/2 && 
  fixed.x - moving.x < fixed.width/2+moving.width/2 && 
  moving.y - fixed.y < moving.height/2+fixed.height/2 &&
   fixed.y - moving.y < fixed.height/2+moving.height/2)
   {
    moving.shapeColor = "skyblue";
    fixed.shapeColor = "brown";
  }
else{
  moving.shapeColor = "blue";
  fixed.shapeColor = "orange";
}



  drawSprites();
}