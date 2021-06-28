




function preload() {

bg =loadImage("images/garden.png");
tomImage = loadImage("images/cat1.png");
catAni = loadAnimation("images/cat2.png","images/cat3.png");
cat4 = loadAnimation("images/cat4.png");
jerryImage = loadImage("images/mouse1.png");
mouse4 = loadAnimation("images/mouse4.png");
mouseAni = loadAnimation("images/mouse2.png","images/mouse3.png");
 
}

function setup(){
    createCanvas(1200,1200);
//cat/jerry//
 tom = createSprite(900,1000,40,40);
 tom.addImage("tom",tomImage);
 tom .addAnimation("stopCat",cat4);
 tom.scale = 0.2;
 tom.debug = true;

 //mouse/jerry//
 jerry = createSprite(200,1000,60,60);
 jerry.addImage("jerry",jerryImage);
 jerry.scale = 0.2;
    
}

function draw() {

    background(bg);
    if(jerry.isTouching(tom)){
        tom.velocityX = 0;
        tom.changeAnimation("stopCat");
    }


 
    

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX = -4;
    tom.addAnimation("catRunning",catAni);
   tom.changeAnimation("catRunning");

}

   if(keyCode===LEFT_ARROW){
       jerry.addAnimation("happyRat",mouseAni);
       jerry.changeAnimation("happyRat");
       jerry.frameDelay = 25;
   }

   
       jerry.addImage("stopRat",mouse4);
    //   jerry.changeAnimation("stopRat");

   }


  



