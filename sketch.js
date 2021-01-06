const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wld,Pgroup;

var arrowMan,platform1,platform2,platform3,ground,roof, arrowmanImg, groundImg, iGround, arrowImg;

function preload(){
arrowmanImg = loadImage("images/ArrowMan.png");
groundImg = loadImage("images/ground.png")
arrowImg = loadImage("images/downloadarrow2.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

en = Engine.create();
wld = en.world;

Pgroup = new Group()

// ground = new Ground(displayWidth/2, displayHeight - 50, displayWidth,120);

// platform1 = new Ground(400,displayHeight - 250,200,70)

// arrowMan  =  Bodies.rectangle(100,displayHeight -150,50,50.)
// World.add(wld,arrowMan);

ground  = createSprite(width/2, height-20,width, 20);
ground.addImage("ground", groundImg);
ground.scale  = 0.4;
ground.debug = true;
ground.setCollider("rectangle",0,0,width,200)

// platform1 = createSprite(400,height - 250,200,70);
// platform1.addImage("platform1",groundImg)

// platform2 = createSprite(550,height - 150,200,70);
// platform2.addImage("platform2",groundImg)

// platform3 = createSprite( 700,height - 250,200,70)
// platform3.addImage("platform3",groundImg)




arrowMan  = createSprite(100,height - 100, 100,150);
arrowMan.addImage("man", arrowmanImg);
arrowMan.scale  = 0.4;
arrowMan.debug = true;

// arrow = createSprite(100,height - 100, 100,150)
// arrow.addImage("arrow", arrowImg);
// arrow.scale  = 0.6;



iGround  = createSprite(width/2, height - 60, width, 10);
iGround.visible  = false


}

function draw(){
    Engine.update(en);
    background("white");


    arrowMan.collide(iGround);
    platform();
    drawSprites();


   

// ground.display();
// platform1.display();

// imageMode(CENTER);
// image(this.arrowmanImg, arrowMan.position.x, arrowMan.position.y,100,150);


}

function platform(){
    if(frameCount % 150 === 0){
        var platform = createSprite(width,random(height/2 + 75,height/2 - 50));
        platform.velocityX = -5;
        Pgroup.add(platform)
        Pgroup.setLifetimeEach ( width/5);
        
        
    }

    
}

