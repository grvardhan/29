class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill(225,0,0);
        super.display()
    }
}