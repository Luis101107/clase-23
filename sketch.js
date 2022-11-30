


//Crear espacio de nombre para Engine
const Engine = Matter.Engine;
//Crear espacio de nombre para World
const World = Matter.World;
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies;
//Crear espacio de nombre para Body
const Body = Matter.Body;


function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create();
  //Agregar world a engine
  world = engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
ground = Bodies.rectangle(200,370,400,10,ground_options);
//agregarlo a world
World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
  rect(ground.position.x,ground.position.y,400,10)
  ellipse(ball2.position.x,ball2.position.y,20);


  
  
}

