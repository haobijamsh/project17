
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY=1;
var END=0;
var gameState;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.scale=0.2;
  monkey.addAnimation("moving",monkey_running);

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
 
  
  score = 0;
}


function draw() {
  background("lime")
 
  
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.round(frameCount/frameRate())
  text("Survival Time= "+score,100,50)

   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=12 ;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground)
  spawnObstacle();
  spawnBanana();
  drawSprites();
}
function spawnBanana(){
   if (frameCount % 100 === 0) {
     var banana = createSprite(400,100,10,10);
     banana.addImage(bananaImage);
     banana.velocityX=-3;
     banana.scale=0.2;
     banana.lifeTime= 200;
  }
}



function spawnObstacle(){
   if (frameCount % 300 === 0) {
     var obstacle = createSprite(400,300,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX=-3;
     obstacle.scale=0.2;
     obstacle.lifetime=200;
  }

}



