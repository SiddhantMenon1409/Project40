var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount


  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameStae === 2){
    game.end();
  }
  if(playerCount === 2){
    game.update(1);
  }

  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.distance +=10;
    player.update();
  }

  if(keyIsDown(LEFT_ARROW) && player,index !== null){
    player.distance -=10;
    player.update();
  }

   if(frameCount % 20 === 0){
     fruits = createSprite(random(100,1000),0, 100, 100);
     fruits.velocityY = 6;
     var rand = Maths.round(random(1,5));
     switch(rand){
       case 1:fruits.addImage("fruit1",fruit,fruit_img);
       break;
       case 2:fruits.addImage("fruit1",fruit,fruit_img);
       break;
       case 3:fruits.addImage("fruit1" ,fruit,fruit_img);
       break;
       case 4:fruits.addImage("fruit1",fruit,fruit_img);
       break;
       case 5:fruit.addImage("fruit1",fruit,fruit_img);
       break;
     }
        fruitGroup.add(fruits);
   }


}