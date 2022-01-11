const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;

function preload(){

  box_img= loadImage("snow2.jpg")

}

function setup() {
  var canvas = createCanvas(1800,1800);
  engine = Engine.create();
  world = engine.world;

   box = new box(1200,1200,600,600);
   box = box.addImage(box_img);  

}

function draw() {
  background(200,255,255);  
  drawSprites();

  box.display();

}