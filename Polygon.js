class Polygon {
    constructor(x,y,r){
      var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.circle(x, y, r/2, options);
    this.r = r;
    World.add(world, this.body);
    this.image = loadImage("polygon.png");
    }


    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }
  