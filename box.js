class Block
{
    constructor(x, y, width, height, angle) {
        var options = {
            //'restitution':0.8,
            //'friction':1.0,
            //'density':1.0,
            //'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      score(){
        if(this.visibility < 0 && this.visibility > -105){
          score = score +1;
        }
      }    
      display(){
        
        if(this.body.speed<3){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(this.r,this.g,this.b);
          rect(0,0,this.width,this.height);
          pop();
      }
      else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          pop();
      }
      }
}