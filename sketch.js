var backgroundImage;
var bg;
var pigAnimation;
var pigSprite;

function preload(){
 backgroundImage=loadImage("road.jpg");
  pigAnimation=loadImage("pig 1.jpg");
  

}

function setup() {
  createCanvas(1200,400);
// bg=createSprite(200,380,1200,20);
// pigSprite=createSprite(200,380,40,20);
// pigSprite.addImage("pig running",pigAnimation);

}

function draw() {
  //trex.debug = true;
  background(backgroundImage);
 
 
  
  
  drawSprites();
}



