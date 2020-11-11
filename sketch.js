var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	var pack= {
		isStatic : true
  }
	packageSprite=createSprite(width/2, 80, 50,50);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
  
	helicopterSprite=createSprite(width/2+13, 175, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
  
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	log1=Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	log3=Bodies.rectangle(300,610,20,100,{isStatic:true});
	log2=Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,log1);
	World.add(world,log3);
	World.add(world,log2);
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.8,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x +20;
  packageSprite.y= packageBody.position.y -20;
  console.log(packageSprite);
  var pos = log1.position;
  var pos1 = log2.position;
  var pos2 = log3.position;
  rectMode(CENTER);
  fill("red");
  rect(pos.x,pos.y,200,20);
  rect(pos1.x,pos1.y,20,100);
  rect(pos2.x,pos2.y,20,100);

  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
   }

}



