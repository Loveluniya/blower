const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite; 
let engine; 
let world; 
 
var blower,ball,blowermouth,button1; 
 
function setup() { 
  createCanvas(windowWidth,windowHeight - 4 ); 
 
  engine = Engine.create(); 
  world = engine.world; 
 
  blower = new Blower (width / 2 - 150,height / 2,width / 9 ,height / 22  ); 
  ball = new Ball (width / 2,height / 2 - 200,width / 23 ); 
  blowermouth = new Blowermouth (width / 2 ,height / 2 - 40,width / 9 ,height / 5  );

  button1 = createButton(" Click to Blow");
  button1.position(width / 2, height -100);
  button1.class("blowButton");
  button1.mousePressed(blow);
} 
 
function draw()  
{ 
  background(51); 
  Engine.update(engine);  
 
  blower.show(); 
  ball.show(); 
  blowermouth.show();  

  
  drawSprites();   
}  
  
 function blow(){ 
  Matter.Body.applyForce(ball.body,{x:0 ,y:0},{x:0,y:0.05}); 
 } 