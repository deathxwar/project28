class Launch{
    constructor(bodyA,pointB){
       var Options = {
           bodyA : bodyA,
           pointB : pointB,
           length : 10,
           stiffness  : 0.01
       }
       this.pointB = pointB
       this.chain = Matter.Constraint.create(Options)
       World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        } 
    }
}