class Particle{
  constructor(x, y, w, h){
    var options={
      isStatic:false,
      'restitution':1,
      'density':1.2,
      'friction':0
    }
    this.body= Bodies.rectangle(x, y, w, h, options)
    this.w = w;
    this.h = h;
    this.color= color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    noStroke();
    fill(this.color)
    ellipseMode(CENTER)
    ellipse(0,0, this.w, this.h)
    pop(); 
  }
}