var dog,sadDog,happyDog;
var feed,addfood;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("feed the dog")
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  addfood=createButton("Add Food")
  addfood.position(800,95);
  addfood.mousePressed(addFoods); 

  ped=new Food();
}

function draw() {
  background(46,139,87);
  drawSprites();
  display();
}
function feedDog(){
  dog.addImage(happyDog);
  if(foodObj.getFoodStock()<=0){
     foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

function addFoodsI(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}