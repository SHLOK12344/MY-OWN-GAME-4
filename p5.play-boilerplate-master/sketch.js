var pc
var ground,ground2
var log,log2
var logGroup
var Ground

function preload() {
  
  ForestImage = loadImage("Images/Forest Image.jpg");
  logImage = loadImage("Images/log1.png");
  logImage2 = loadImage("Images/log2.jpg");
  pcImage = loadAnimation("Images/Pc-1.png","Images/Pc-2.png","Images/Pc-3.png","Images/Pc-4.png","Images/Pc-5.png","Images/Pc-6.png");
  BackgroundImage = loadImage("Images/Forest Image1.jpg");
  GroundImage1 = loadImage("Images/ground1.png");
  GroundImage2 = loadImage("Images/ground2.png");
  GroundImage3 = loadImage("Images/ground3.png");
  GroundImage4 = loadImage("Images/ground4.png");
  GroundImage5 = loadImage("Images/ground5.png");
  GroundImage6 = loadImage("Images/ground6.png");
  GroundImage7 = loadImage("Images/ground7.png");
  coinImage = loadImage("Images/coin.png");
  
}

function setup() {
  createCanvas(1000,600);

  ground = createSprite(500,300,1600,1500);
  ground.velocityX=-5
  ground.addImage("groundImage",ForestImage);
  ground.scale=0.67

  groundGroup = new Group();
  coinGroup = new Group();

  ground2 = createSprite(1700,300,1600,1500);
  ground2.velocityX=-5
  ground2.addImage("groundImage",ForestImage);
  ground2.scale=0.67;

 pc = createSprite(100, 450, 50, 50);
 pc.addAnimation("pcImage",pcImage);
 pc.scale=0.6;
logGroup = new Group();
 edges=createEdgeSprites()
}

function draw() {

 spawnObstacles();
 spawnGrounds();
 coins();

if(ground.x<0){
     ground.x=600;
   }

if(ground2.x<500){
  ground2.x=1300;
 }

if(keyDown("SPACE")){
   pc.velocityY=-10
}

if(pc.isTouching(groundGroup)){
  pc.velocityX=0;
  pc.velocityY=0
}

pc.velocityY=pc.velocityY+1;
pc.collide(edges[3]);

drawSprites();
}

function spawnObstacles(){

if(frameCount%100===0){
  log = createSprite(1000,550,10,10);
  log.addImage("logImage",logImage);
  log.scale=0.3
  log.velocityX=-8
  log.lifetime=200;
  logGroup.add(log)
  log2 = createSprite(random(500,2000),550,10,10);
  log2.addImage("logImage",logImage2);
  log2.velocityX=-8
  log2.lifetime=200;
  logGroup.add(log2);
  pc.depth=log.depth+1;
  pc.depth=log2.depth+1;
}

if(frameCount%750===0){
  
 }
}

function coins() {
  if(frameCount%100===0){
    var ran=Math.round( random(1,6))
   /* for(var i=0; i<=ran; i=i+1 ){
      
    }*/
    coin = createSprite(Ground.x,Ground.y-30,10,10);
    coin.addImage("coin",coinImage);
    coin.scale=0.2
    coin.velocityX=-5
    coinGroup.add(coin);
  }
  
}

function spawnGrounds() {
  if(frameCount%100===0){
    var x = random(900,1000)
    var y = random(200,400)
    Ground = createSprite(x,y,10,10);
    Ground.velocityX = -5;

    var rand = Math.round(random(1,4));
    
    switch(rand){
     case 1 : Ground.addImage(GroundImage2);
              break;
     case 2 : Ground.addImage(GroundImage4);
              break;
     case 3 : Ground.addImage(GroundImage5);
              break;   
     case 4 : Ground.addImage(GroundImage6);
              break;    
     default : break;
    }
    groundGroup.add(Ground);
  }
}