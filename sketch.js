var bgimg
var cat
var mouse

function preload() {
    //load the images here
    bgimg = loadImage("garden.png");
    cat1 = loadImage("cat1.png")
    cat2 = loadAnimation("cat2.png","cat3.png")
    mouse1 = loadImage("mouse1.png")
    mouse2 = loadAnimation("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(300,300)
    mouse = createSprite(400,400)
}   

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x <= mouse.width/2+cat.width/2&&
        mouse.x - cat.x <= mouse.width/2+cat.width/2&&
         cat.y - mouse.y <= mouse.height/2+cat.height/2&&
          mouse.y - cat.y <= mouse.height/2+cat.height/2){
       mouse.shapeColor= "green";
       cat.shapeColor="green";
     }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse1)
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse1)
    mouse.frameDelay = 25;
}

}
