
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stand1;	


function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,880,1600,20);

	stand1 = new Ground(700,650,300,15);
	stand2 = new Ground(1250,470,300,15);

	block1=new Box(650,635,30,40);
	block2=new Box(680,635,30,40);
	block3=new Box(710,635,30,40);
	block4=new Box(665,605,30,40);
	block5=new Box(690,605,30,40);
	block6=new Box(675,575,30,40);
	block7=new Box(1200,455,30,40);
	block8=new Box(1230,455,30,40);
	block9=new Box(1260,455,30,40);
	block10=new Box(1215,415,30,40);
	block11=new Box(1245,415,30,40);
	block12=new Box(1230,375,30,40);
	polygon=Bodies.circle(50,200,20);
	World.add(world,polygon);
	slingShot=new SlingShot(this.polygon,{x:100,y:200});
	
	








	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stand1.display();
  stand2.display();
  block3.display();
  block2.display();
  block4.display();
  block5.display();
  block6.display();
  block1.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  


		
  
  
  drawSprites();
 
}



