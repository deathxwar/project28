
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImage;
var ground;
var tree,treeImage;
var stone;
var launch;

function preload(){
    boyImage = loadImage("boy.png");
    treeImage = loadImage("tree.png")
    
}

function setup() {
	createCanvas(1200,650);
    boy = createSprite(200,500,20,20);
    boy.addImage(boyImage);
    boy.scale = 0.1

    tree = new Tree(10,50,100,500);
    
    stone = new Stone(130,460,45,50);

    mango1 = new Mango(600,200)
    mango2 = new Mango(100,180)
    mango3 = new Mango(700,200)
    mango4 = new Mango(400,150)
    mango5 = new Mango(550,150)

    launch = new Launch(stone.body,200,500)

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,600,1400,20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255,255,255);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  ground.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.body.setPosition(stone.body, mouseX,  mouseY)
}

