class Blocks {
  constructor(x,y,width,height,angle) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibilty = 1000
  }
  
  display(){
    if(this.body.speed<5){
      var angle = this.body.angle;
    //console.log (angle);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0,0, this.width, this.height);
    pop();
    }else{
      push();
      World.remove(world,this.body);
      tint(1000,this.visibilty);
      this.visibilty = this.visibilty - 2;
      rect(0,0, this.width, this.height);
      pop();
    }

  }
  score(){
    if(this.visibilty<0 && this.visibilty>-105){}
  score++;
  }
  
};
