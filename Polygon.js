class Polygon
{
    constructor(x, y, r, width, height, angle)
    {
        var o = 
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }

        this.body = Bodies.circle(x, y, r)
        this.width = 60
        this.height = 60
        this.image = loadImage("polygon.png")
        World.add(world, this.body)
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height, this.r);
        pop();
    }
}