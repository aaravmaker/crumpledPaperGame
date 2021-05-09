
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperBall = new Paper(200,450,40)
trash = new Dustbin(1200,650)
floor = new Ground(800,350,1600,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paperBall.display()
trash.display()
floor.display()


  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}

