class Tree{
    constructor(x,y){
       var Options = {
           isStatic : true
        }       
        this.body = Bodies.rectangle(x,y,1206,500,Options)
        this.width = 1206
        this.height =500
        this.image = loadImage("tree.png")
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}