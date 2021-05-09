class Dustbin {
    constructor(x,y){
    this.x=x ;
    this.y=y;
    this.dustbinWidth=200
    this.dustbinHeight=100
    this.wallThickness=20
    this.bottom=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
    this.left=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    this.angle=0
    Matter.Body.setAngle(this.left,this.angle)
    this.right=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
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