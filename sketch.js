var bullet,wall;
var speed, weight,thickness;


function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 5);
  

  thickness = random(22,83);
  wall = createSprite(700, 200, thickness, height/2);
  speed = random(55,90);
  weight = random(400,1500); 

  bullet.velocityX = speed; 

}
 
function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness)
   if(damage>10){
     wall.shapeColor = color("red");
   }
   if(damage<10){
     wall.shapeColor = color("green")
   }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true
  } else {
    return false; 
  }
}