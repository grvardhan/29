class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill(0,0,225);
        super.display()
    }
}