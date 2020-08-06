var fixedRect, movingRect;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(1200,200,50,50);
  box1.shapeColor = "red";
  box1.debug = true;
  box2 = createSprite(0,200,50,50);
  box2.shapeColor = "blue";
  box2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1.velocityX = -5;
  box2.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(box1,box2);
  bounceOff(movingRect,fixedRect);

  drawSprites();
}


