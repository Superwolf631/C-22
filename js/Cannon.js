class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannontop = loadImage("assets/canon.png");
    this.cannonbottom = loadImage("assets/cannonBase.png");
  }
   display() {
   //cannon top
   push();
   translate(this.x,this.y);
   rotate(this.angle);
   imageMode(CENTER);
   image(this.cannontop,0,0,this.width,this.height);
   pop();


   //cannon bottom
    image(this.cannonbottom,70,20,200,200);
     noFill();
    
  }
} 
