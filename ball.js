class ball{
    constructor(x,y,r){
  var option ={
  isStatic: false,
  restitution:0.3,
  friction:0.5,
  density:1.2,
  }
  this.x=x;
  this.y=y;
  this.r=r;

  this.body=Bodies.circle(this.x,this.y,r/2,option)
  World.add(world,this.body);
  
    }
  display(){
      var ballpos =this.body.position;
      push();
      translate(ballpos.x,ballpos.y);
      fill(255,0,255);
      ellipseMode(CENTER)
      ellipse(0,0,this.r,this.r);
      pop();   
  }
  };