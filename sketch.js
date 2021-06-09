//Create variables here
var dog,sadDog,happyDog;
var database;
var foodObj;
var foodS,foodStock;


function preload()
{
	//load images here
  sadDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() 
{
  createCanvas(500, 400);

  database = firebase.database()

  dog = createSprite(300,250,100,100);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

 
}


function draw()
 {  
  background(46,139,87);
  
 
   
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
 
  fill("white");
  stroke(20);
  text("Note: Press UP_ARROW To Feed Drago Milk!",100,15);
 
  text("Food Remaining :19 ",250,150);

 

}
function readStock(data)
{
  foodS = data.val();
}
function writeStock(x)
{
  if(x<=0)
  {
    x = 0;
  }
  else
  {
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })

}