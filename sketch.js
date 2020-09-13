var movingRect, staticRect
var rect1, rect2



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  staticRect=createSprite(400, 200, 50, 50)
  rect1=createSprite(0, 100, 50, 50);
  rect2=createSprite(800, 100, 50, 50)
  rect1.velocityX=5
  rect1.shapeColor="orange"
  rect2.velocityX=-5

}

function draw() {
  background(0); 
  movingRect.x= mouseX
  movingRect.y= mouseY
bounceOff(rect1,rect2)
if(isTouching(movingRect,staticRect)){
  movingRect.shapeColor='red'
  staticRect.shapeColor='green'
}
 else{
  movingRect.shapeColor='grey'
  staticRect.shapeColor='grey'  
 }




   
  drawSprites();
}
