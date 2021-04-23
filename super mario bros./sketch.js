var grnd, grndIMG;

var plr, plrIMG;

var floor, theFloor;

function preload(){
grndIMG = loadImage("bigbgd.png");
plrIMG1 = loadAnimation("smb_left_mario.png");
plrIMG2 = loadAnimation("smb_mario_right.png");
}

function setup() {
  createCanvas(1450,720);
  grnd = createSprite(725, 310, 50, 50);
  grnd.addImage(grndIMG);
  grnd.scale = 2;
  
  plr = createSprite(725, 310, 50, 50);
  plr.addAnimation("smb_mario_left", plrIMG1);
  plr.addAnimation("smb_mario_right", plrIMG2);
  plr.scale = 2.5;
}

function draw() {
  background(0,0,0);    

  if(keyDown("d")){
    plr.velocity.x = +5;
    plr.changeAnimation(plrIMG2);
  }

  if(keyDown("a")){
    plr.velocity.x = -5;
    plr.changeAnimation(plrIMG1);
  }

  if(keyWentUp("A")){
    plr.velocity.x = 0;
    plr.velocity.y = 0;
  }

  if(keyWentUp("D")){
    plr.velocity.x = 0;
    plr.velocity.y = 0;
  }

  if(keyDown("e")){
    plr.velocity.x = +8;
  }

  if(keyDown("q")){
    plr.velocity.x = -8;
  }

  if(keyWentUp("e")){
    plr.velocity.x = 0;
    plr.velocity.y = 0;
  }

  if(keyWentUp("q")){
    plr.velocity.x = 0;
    plr.velocity.y = 0;
  }

  drawSprites();
}