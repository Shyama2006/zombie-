var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombies;
var zombiesImg;
var zombiesGroup;
var shooterfall;
var blastImg;
var bullet;
var bulletGroups;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombiesImg= loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
  shooterfall = loadImage("assets/shooter_fall.png");
  blastImg = loadImage("assets/blast.webp");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  zombiesGroup=new Group();
 bulletGroups=new Group();

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300);


}



function draw() {
  background(0); 


  Spawnzombies();

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player. x= player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+30
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x+50,player.y-20,15,5);
  bullet.velocityX= 5;
  bulletGroup.add(bullet);
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(zombiesGroup.isTouching(player)){
  player.addImage(shooterfall);
}

drawSprites();

}

function Spawnzombies(){
    if (frameCount % 100 === 0) {
      var zombies = createSprite(width, Math.round(random(200,500)),40,10);
      zombies.addImage(zombiesImg);
      zombies.scale = 0.15;
      zombies.velocityX = -3;
      
       //assign lifetime to the variable
      zombies.lifetime = 500;
      
      //add each cloud to the group
      zombiesGroup.add(zombies);
    }
    
}

