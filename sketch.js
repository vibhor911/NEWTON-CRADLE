const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
function setup(){
	var canvas = createCanvas(1600,700);
	rectMode(CENTER)
    engine = Engine.create();
    world = engine.world;
   
    ground = new ground(width/2,height/4,width/7,20);
	ballDaimeter=40;

	startBallPositionX=width/2;
	startBallPositionY=height/4+500;

	ball1 = new ball(startBallPositionX-ballDaimeter*2,startBallPositionY,ballDaimeter);
    ball2 = new ball(startBallPositionX-ballDaimeter,startBallPositionY,ballDaimeter);
    ball3 = new ball(startBallPositionX,startBallPositionY,ballDaimeter);
    ball4 = new ball(startBallPositionX+ballDaimeter,startBallPositionY,ballDaimeter);
    ball5 = new ball(startBallPositionX+ballDaimeter*2,startBallPositionY,ballDaimeter);

    chain1 = new Chain(ball1.body,ground.body,-ballDaimeter*2,0)
	chain2 = new Chain(ball2.body,ground.body,-ballDaimeter*1,0) 
    chain3 = new Chain(ball3.body,ground.body,0,0)
    chain4 = new Chain(ball4.body,ground.body,ballDaimeter*1,0)
	chain5 = new Chain(ball5.body,ground.body,ballDaimeter*2,0)
}

function draw(){
	rectMode(CENTER);
	background(230);
	
	Engine.update(engine);
   
	ground.display();
	
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	ball1.display();
	ball3.display();
	ball2.display();
	ball4.display();
	ball5.display();	

}

/*function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	groundBodyPosition=constraint.bodyB.position

	groundBodyOffset=constraint.pointB;
	
	groundBodyX=groundBodyPosition.x+groundBodyOffset.x
	groundBodyY=groundBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}*/

function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
	}
	
	}
