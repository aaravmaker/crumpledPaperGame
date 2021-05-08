class Dustbin {
    constructor(x,y){
    this.x=x ;
    this.y=y;
    this.bottom=Bodies.rectangle(this.x,this.y,200,20,{isStatic:true})
    this.left=Bodies.rectangle(this.x-100,this.y-50,20,100,{isStatic:true})
    this.angle=0
    Matter.Body.setAngle(this.left,this.angle)
    this.right=Bodies.rectangle(this.x+100,this.y-50,20,100,{isStatic:true})
    Matter.Body.setAngle(this.left,-1*this.angle)
    World.add(world,this.bottom)    
    World.add(world,this.left)  
    World.add(world,this.right)  

    }
    
display(){
    var bottomPos=this.bottom.position
    var rightPos=this.right.position
    var leftPos=this.right.position
    rectMode(CENTER)
    fill("white")
    rect(leftPos.x,leftPos.y)
    rect(rightPos.x,rightPos.y)
    rect(bottomPos.x,bottomPos.y)
}

}