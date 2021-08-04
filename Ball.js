class Ball {
  constructor(x,y,r){
   
   let options={
   restitution:0.5
   }
   
   this.body = Bodies.circle(x,y,r,options);
   this.r = r;
   
   World.add(world,this.body);
   }
   show(){
   
   let pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   ellipseMode(CENTER);
   fill("yellow");
   ellipse(0,0 ,this.r);
   pop();
   }
   }