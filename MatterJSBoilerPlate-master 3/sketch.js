
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5;
var floor;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Ground(350, 100, 300, 30);
	World.add(world, floor);
b1 = new Bob(250, 300);
b2 = new Bob(300, 300);
b3 = new Bob(350, 300);
b4 = new Bob(400, 300);
b5 = new Bob(450, 300);

rope1 = new Chain(b1.body, floor.body, -100, 0);
World.add(world, rope1);

rope2 = new Chain(b2.body, floor.body, -50, 0);
World.add(world, rope2);

rope3 = new Chain(b3.body, floor.body, 0, 0);
World.add(world, rope3);

rope4 = new Chain(b4.body, floor.body, 50, 0);
World.add(world, rope4);

rope5 = new Chain(b5.body, floor.body, 100, 0);
World.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  floor.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 
  drawSprites();
 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body, b1.body.position, {x:-730, y:0});
	}
}



