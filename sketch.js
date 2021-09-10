var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 rect1=createSprite(390,655,200,10);
	 rect1.shapeColor=color(255,0,0);
	 rect2=createSprite(485,610,10,100);
	 rect2.shapeColor=color(255,0,0);
	 rect3=createSprite(290,610,10,100);
	 rect3.shapeColor=color(255,0,0);
	 packageSprite.collide(rect1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}

function keyPressed() {
	if(keyCode=== LEFT_ARROW){
	helicopterSprite.x-=20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody,translation)
	}
	
else if(keyCode=== RIGHT_ARROW){
	helicopterSprite.x+=20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody,translation)
}
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
    
  }
}



