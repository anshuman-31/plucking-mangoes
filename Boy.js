class Boy {
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,

        }
        this.image=loadImage("sprites/boy.png")
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
    display(){
        image(this.image,0,0,50,50)
    }


}