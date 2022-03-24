
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle = 60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn2=createImg("up.png")
  btn2.position(50,50)
  btn2.size(20,20)
  btn2.mouseClicked(Vforce)

  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
push()
translate(200,200)
 rotate(angle)
angle=angle+0.5


  rect(0,0,80,10)
  pop()
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue");
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function Vforce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}


  