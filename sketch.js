
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, box;
var Slingshot;

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block8 = new block(330, 235, 30, 40);
  block9 = new block(360, 235, 30, 40);
  block10 = new block(390, 235, 30, 40);
  block11 = new block(420, 235, 30, 40);
  block12 = new block(450, 235, 30, 40);
  block13 = new block(360, 195, 30, 40);
  block14 = new block(390, 195, 30, 40);
  block15 = new block(420, 195, 30, 40);
  block16 = new block(390, 155, 30, 40);
}
imageMode(CENTER)
image(polygon_img, polygon.position.x,polygon.position.y,40,40);

function draw() {
  background(255,255,255); 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}