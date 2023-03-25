var player, player2, player2Img, playerFight, playerPunch;
var Enemies;
var escritorio1, escritorio2, escritorio3, escritorio4, escritorioImg;
var chaoImg, chao;
var paredeImg, parede;
var chato1, chato2,chato3,chato4, chatos1Group, chatos2Group, chatos3Group, chatos4Group, chato1Img, chato2Img, chato3Img,chato4Img;
var gameState = "fight"
var relogio;

function preload()
{
  chaoImg = loadImage("sprites/pixilframe26.png")
  paredeImg = loadImage("sprites/pixilframe9.png")
  playerImg = loadImage("sprites/pixilframe24.png")
  escritorioImg = loadImage("sprites/pixilframe25.png")
  chato1Img = loadImage("sprites/pixilframe21.png")
  chato2Img = loadImage("sprites/pixilframe20.png")
  chato3Img = loadImage("sprites/pixilframe19.png")
  player2Img = loadImage("sprites/pixilframe28.png")
  
}

function setup() 
{  
  createCanvas(windowWidth, windowHeight);

  //adicionando a imagem de fundo
  chao = createSprite(displayWidth / 2 + 20, displayHeight / 2 + 40, 20, 20);
  chao.addImage("chao", chaoImg);
  chao.scale = 10;

  parede = createSprite(displayWidth/2+20,displayHeight/2+40,20,20);
  parede.addImage("parede", paredeImg);
  parede.scale= 10;
  
  chatos1Group = new Group()

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage("player", playerImg);
  player.scale=1;
  //player.debug=true;
  player.setCollider("rectangle",0,0,300,300)

  escritorio1 = createSprite(displayWidth-600,displayHeight-400,60,60);
  escritorio1.addImage("escritorio", escritorioImg);
  escritorio1.scale=6;

  escritorio2 = createSprite(displayWidth-1200,displayHeight-400,60,60);
  escritorio2.addImage("escritorio", escritorioImg);
  escritorio2.scale=6;
  
  escritorio3 = createSprite(displayWidth-600,displayHeight-800,60,60);
  escritorio3.addImage("escritorio", escritorioImg);
  escritorio3.scale=6;

  escritorio4 = createSprite(displayWidth-600,displayHeight-800,60,60);
  escritorio4.addImage("escritorio", escritorioImg);
  escritorio4.scale=6;
}


function draw() 
{
  background(0); 
  
  if (gameState === "fight") 
  {
    if(keyDown("UP_ARROW") || touches.length > 0)
    {
      player.y = player.y-5
    }

    if(keyDown("DOWN_ARROW") || touches.length > 0)
    {
     player.y = player.y+5
    }
    if (keyDown("LEFT_ARROW")|| touches.legth > 0) {
      player.changeImage("player2", player2Img)
      player.x = player.x-5
      
    }
    if (keyDown("RIGHT_ARROW")|| touches.legth >0) {
      player.x = player.x+5
    }
  } 
 
  drawSprites();

}
  /*/showLife(){
  push();
  image(lifeImage, width / 2 - 130, height - player.positionY - 350, 20, 20);
  fill("white");
  rect(width / 2 - 100, height - player.positionY - 350, 185, 20);
  fill("#f50057");
  rect(width / 2 - 100, height - player.positionY - 350, player.life, 20);
  noStroke();
  pop();
}*/
function enemy1(){
  if (frameCount%50===0) {
    chato1 = createSprite(random(900,1300),random(100,500),40,40);
    chato1.addImage(chato1Img);
    chato1.scale=random(0.12,0.20);
    chato1.velocityX= -3;
    //zombie.debug = true;
    chato1.setCollider("circle",0,0,400);
    chato1.lifeTime=400
    chatos1Group.add(chato1)
  }
}
function enemy2(){
  if (frameCount%50===0) {
    chato2 = createSprite(random(900,1300),random(100,500),40,40);
    chato2.addImage(chato2Img);
    chato2.scale=random(0.12,0.20);
    chato2.velocityX= +3;
    //zombie.debug = true;
    chato2.setCollider("circle",0,0,400);
    chato2.lifeTime=400
    chatos2Group.add(chato2)
  }
}
function enemy3(){
  if (frameCount%50===0) {
    chato2 = createSprite(random(900,1300),random(100,500),40,40);
    chato2.addImage(chato2Img);
    chato2.scale=random(0.12,0.20);
    chato2.velocityX= -3;
    //zombie.debug = true;
    chato2.setCollider("circle",0,0,400);
    chato2.lifeTime=400
    chatos2Group.add(chato1)
  }
}


