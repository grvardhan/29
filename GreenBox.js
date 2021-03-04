class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill(0,128,0);
        super.display();
    }
}