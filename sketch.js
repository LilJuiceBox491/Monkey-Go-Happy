var ma, m, b, bi, bg, ob, obi, obg, bkg, ground, invisibleGround, score;

function preload(){
  ma = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bi = loadImage("banana.png");
  obi = loadImage("stone.png");
  bkg = loadImage("jungle.jpg");
}

function setup() {
  
  score = 0;
  
  createCanvas(600, 400);
  ground = createSprite(0,0,width,50);
  ground.addImage(bkg);
  ground.scale=1.1;
  ground.x = ground.width /2;
  ground.velocityX = -8;
  
  obg=createGroup();
  bg=createGroup();
  
  m = createSprite(100,320,20,50);
  m.addAnimation("running", ma);
  m.scale = 0.2;
  m.setCollider("circle",0,0,45);
  
  
  invisibleGround = createSprite(0,340,600,10);
  invisibleGround.visible = false;
}

function draw() {
  background(bkg);

  
   if (ground.x < width/2){ 
    ground.x = ground.width/2;
  }
  
    if(keyDown("space")&&m.y>200){
    m.velocityY = -18;  
  }
  
  m.velocityY=m.velocityY+1;
  m.collide(invisibleGround);
  
  fruits();
  obbys();
  
  if(bg.isTouching(m)){
    score=score+2;
    bg.destroyEach();
  }
  
  switch(score){
    case 10: m.scale=0.25;
    break;
    case 20: m.scale=0.3;
    break;
    case 30: m.scale=0.35;
    break;
    case 40: m.scale=0.4;
    break;
    case 50: m. scale=0.45;
    break;
      default: break;
  }
  
  if(obg.isTouching(m)){
    m.scale=0.2;
  }
  
  drawSprites();
  fill("lightblue");
  textSize(20);
  text("Score: "+score, 500,50);
}

function fruits(){
  if(frameCount%60===0){
    b=createSprite(width,Math.round(random(10,height-50)));
    b.addImage(bi);
    b.velocityX=-(10);
    b.lifetime=60;
    b.scale=0.1;
    b.depth=m.depth;
    b.depth=m.depth+1;
    bg.add(b);
  }
}

function obbys(){
  if(frameCount%80===0){
    ob=createSprite(width,350);
    ob.velocityX=-(11)
    ob.lifetime=55;
    ob.scale=0.2;
    ob.addImage(obi);
    obg.add(ob);
  }
}