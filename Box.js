class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.heigth = this.heigth;
        World.add(world,this.body);
    }
    display(){
        var pos  = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.heigth);
    }
}