var bg, bgImg
var player, playerImg, shooterImg


function preload(){
  bgImg=loadImage("HELL.png")
  playerImg=loadImage("Idiot.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20, displayHeight/2-40,20,20) 
  bg.addImage(bgImg)
  bg.scale=2

  player=createSprite(displayWidth-1150, displayHeight-300,50,50)
  player.addImage(playerImg)
  player.scale=0.5

  player.debug=true
  player.setCollider("rectangle", 0,0, 300,300)

}

function draw() {
  background(255,255,255);  
  if (keyDown("UP_ARROW")||touches.length>0){
    player.y=player.y-10

  }

  if (keyDown("DOWN_ARROW")||touches.length>0){
    player.y=player.y+10
  }

  drawSprites();


}

