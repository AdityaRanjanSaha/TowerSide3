class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 5
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;

    strokeWeight(4);
    line(pointA.x,pointA.y, pointB.x, pointB.y);
}
}

fly(){
    this.sling.bodyA = null;
}  
attached(dfc){
    this.sling.bodyA = dfc;
    }
}