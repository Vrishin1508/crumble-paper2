
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);

  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  
  ground= new Ground(400,650,800,10);
  
  paper= new Paper(100,100,30);
 
  //left side
  side1 = new Dustbin(580,620,20,80)
  //right side
  side2 = new Dustbin(720,620,20,80)
  //bottom side
  side3 = new Dustbin(450,640,120,150)
 
  Engine.run(engine);
}
 
  function draw() {
	background("gray");

 ground.display();
 
 paper.display();

 side1.display();

 side2.display();

 side3.display();
  
 drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-1005});

} 
}


