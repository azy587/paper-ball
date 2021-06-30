
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObj	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,590,width,20);
	dustbinObj=new dustbin(1100,570);
    paperObj=new Paper(50,200,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  groundObject.display();
  dustbinObj.display();
  paperObj.display()

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:1130,y:-1145});
	}
}

