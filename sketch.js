//name spacing  
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  var options={
    restitution:0.5
  }

  object=Bodies.circle(200,100,50,options)
  World.add(world,object)
  var options1={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,200,50,options1)
  World.add(world,ground)
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);


 }

function draw() {
  background(0);
  Engine.update(engine);
  rectMode("center")
  rect(ground.position.x,ground.position.y,800,20);
  ellipse(object.position.x,object.position.y,100,100);
 
}