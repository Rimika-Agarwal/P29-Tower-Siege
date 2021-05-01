class SlingShot{
    constructor(body1, point2){
        //JSON - JS Object Notation
        //key: value
        //length: 10
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.04
        }
    
        this.sling = Constraint.create(options)
        this.pointB = point2;
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA !== null){ //if(this.sling.bodyA){}
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x , pointA.y , pointB.x , pointB.y)
        }
        
    }
}