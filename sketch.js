var Player
var Rock, rock, Rocks
var score
function preload()
{
Straight = loadAnimation("Straight1.png", "Straight2.png", "Straight3.png", "Straight4.png", "Straight5.png", "Straight6.png")
Rock = loadAnimation("Rock.jpg")
}





function setup() 
{
createCanvas(1280, 609)
Player = createSprite(600,300)
Player.addAnimation("Straight", Straight)
Player.scale = "1.3"
background("white")

rock = new Group()

drawSprites();
}








function draw() 
{

background("white")

Player.velocityY = Player.velocityY + 0.5

if(keyDown("RIGHT_ARROW")){
Player.x = Player.x + 5
}

if(keyDown("LEFT_ARROW")){
    Player.x = Player.x - 5
}

if(keyDown("UP_ARROW")){
    Player.velocityY = Player.velocityY - 1.5
}

if(Player.y > 609 ){
    background("black")
    Player.velocityY = 0
    textSize(20)
    stroke("Blue")
    text("Game Over",640, 304)
    Player.x = 99999999999999999999999999999999999999999999999999999999999999999
}



if(World.frameCount % 150 == 0)  {
    rockspawn();
}

score = score + Math.round(getFrameRate()/50)


drawSprites();
}



function rockspawn(){
Rocks = createSprite(Math.round(random(10, 1270)), 10);
Rocks.velocityY  = 3
Rocks.scale = 0.5
Rocks.addAnimation("Rock", Rock)
Rock.setLifetime = 200
rock.add(Rocks)
}