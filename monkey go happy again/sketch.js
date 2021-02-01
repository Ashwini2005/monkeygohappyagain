
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width /2;
  
  
}


function draw() {
  console.log(ground.x);
  
 background("green");
            
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  
  text("survival Time:"+survivalTime,100,50)
  survivalTime=Math.ceil(frameCount/getFrameRate());
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.8 
  obstacles();
  bananas();
  
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  drawSprites();
}
function obstacles(){
  if( frameCount %300===0  ){
    obstacle=createSprite(400,330,10,40);
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=120
    obstacle.scale  = 0.1;
  }
    
      
    
}
function bananas(){
  if(frameCount%80===0){
     banana=createSprite(250,350,10,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    
  }
}




