var dog , happyDog;
var dogImg1,dogImg2;
var database;
var foodS, foodStock;
var stock;


function preload()
{
  dogImg1=loadImage("images/dogImg.png");

  dogImg2=loadImage("images/dogImg1.png")

}

function setup() {

  createCanvas(500,500);

  dog=createSprite(250,250);
  dog.addImage(dogImg1);
  dog.scale=0.3;

  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

    foodS=stock-1;

    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();

  textSize(15);
  fill("black");
  text("Note:Press up arrow key to feed the dog",70,50);


  if(stock!==undefined){

    console.log(stock);
    textSize(20);
   fill("black");
   stroke("black");
   text("Food Remaining:"+stock,150,100); 

   }
  
  
}

function readStock(data){

   stock=data.val();
 
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



