class Polygon{
    constructor(x, y, r) {
        var options = {
                restitution : 1,
                density: 0.5     
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2, this.r*2);
        pop();
      }
}