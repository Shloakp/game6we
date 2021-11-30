
var chef; 
var badFoods;
var goodFoods;
var score = 0
var prize;
var prizes;
var prizeImg;
var badBurger, badPie, badEyescream, badNachos, badPizza, badSandwich, badCheese;
var hotdog, pasta, pie, sandwich, taco, turkey, cake, extraLifeImg, poisionImg, protien, rawFood;
var chefImg, backgroundImg;
var cakeS;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cakesGroup;
var gameOverImg, gameOverr;
var lives = 3;
var bf,gf;
var waffle, waffles;
var mushroom, mushrooms;
var speedThing, protienGroup;
var raw, rawFoods;
function preload(){

    gameOverImg = loadImage("Assets/gameOver.png");
    prizeImg = loadImage("Assets/prize.png");

    badBurger = loadImage("Assets/badfood/badBurger.png")
    badPie =  loadImage("Assets/badfood/badPie.png")
    badEyescream =  loadImage("Assets/badfood/Eyescream.png")
    badNachos =  loadImage("Assets/badfood/grossNachos.png")
    badPizza =  loadImage("Assets/badfood/grossPizza.png")
    badSandwich =  loadImage("Assets/badfood/staleSandwich.png")
    badCheese =  loadImage("Assets/badfood/stinkyCheese.png")

    hotdog =  loadImage("Assets/goodfood/hotdog.png")
    pasta =  loadImage("Assets/goodfood/pasta.png")
    pie =  loadImage("Assets/goodfood/pie.png")
    sandwich =  loadImage("Assets/goodfood/sandwich.png")
    taco =  loadImage("Assets/goodfood/taco.png")
    turkey =  loadImage("Assets/goodfood/turkey.png")
    
    cake =   loadImage("Assets/specialFoods/cake.png")
   extraLifeImg =   loadImage("Assets/specialFoods/extralife.png")
   poisionImg =  loadImage("Assets/specialFoods/poison.png")
   protien  =   loadImage("Assets/specialFoods/protien.png")
   rawFood  =   loadImage("Assets/specialFoods/rawfood.png")
   chefImg   = loadAnimation("Assets/Chef1.png","Assets/Chef2.png","Assets/Chef3.png","Assets/Chef4.png");
   backgroundImg  =   loadImage("Assets/background.png")
}

function setup() {
    createCanvas(900,800)

    badFoods = new Group();
    goodFoods = new Group();
    prizes = new Group();
    cakesGroup = new Group();
    rawFoods = new Group();
    mushrooms = new Group();
    waffles = new Group();
    protienGroup = new Group();
chef = createSprite(450,750,50,50)
chef.addAnimation("walking",chefImg);
chef.scale = 2;



gameOverr = createSprite(500,400);
gameOverr.addImage(gameOverImg);
gameOverr.visible = false;
gameOverr.scale = 2;

}

function draw(){
    background("black");
    image(backgroundImg,0,0,900,800);
    textSize(25);
    fill("blue");

    text("Score: "+score,185,50);
    text("Lives: "+lives,770,50);
  
    //PUNCH

    // Chef better

    if(gameState === PLAY){

        if(keyIsDown(RIGHT_ARROW)){
            chef.x +=6;
        }
    
        if(keyIsDown(LEFT_ARROW)){
            chef.x -=6;
        }
    
        if(chef.isTouching(goodFoods)){
            score += 1;
        }

        
        if(chef.isTouching(cakesGroup)){
            chef.scale = 4;
            console.log("message");
        }
       
        if(chef.isTouching(waffles)){
           lives +=1 ;
        }

         if(chef.isTouching(mushrooms)){
            lives = 0; 
         }

         if(chef.isTouching(protienGroup)){
            if(keyIsDown(RIGHT_ARROW)){
                chef.x +=9;
            }
        
            if(keyIsDown(LEFT_ARROW)){
                chef.x -=9;
            }
         }

         if(chef.isTouching(prizes)){
             score+=10
         }

         if(chef.isTouching(rawFoods)){
            if(keyIsDown(RIGHT_ARROW)){
                chef.velocityX =1;
            }
        
            if(keyIsDown(LEFT_ARROW)){
                chef.velocityX =-1;
            }
         }

        badFood();
        goodFood();
        pize();
        specialCake();
        specialWaffle();
        specialMushroom();
        specialProtien();
        specialRawFood();

        if(badFoods.isTouching(chef)){
          gameState = END;
        }

        
    }
    else if(gameState == END){
        gameOverr.visible = true;
        badFoods.destroyEach();
        goodFoods.destroyEach();
        prizes.destroyEach();
    
    }

 



    drawSprites();
    
}


function badFood(){

    if(frameCount %100 === 0){
        var bf = createSprite(200,50)
        bf.x = Math.round(random(100,700));
        bf.velocityY = 6;
        var rand = Math.round(random(1,7))
        switch(rand){

            case 1: bf.addImage(badBurger)
            break;

            case 2: bf.addImage(badCheese)
            break;

            case 3: bf.addImage(badEyescream)
            break;

            case 4: bf.addImage(badNachos)
            break;

            case 5: bf.addImage(badPie)
            break;

            case 6: bf.addImage(badPizza)
            break;

            case 7: bf.addImage(badSandwich)
            break;

        }
        bf.scale = 0.4;
        bf.lifetime = 120
        bf.depth = chef.depth;
        chef.depth +=1
        badFoods.add(bf);
    }

    
}   

function goodFood(){

    if(frameCount %140 === 0){
        var gf = createSprite(200,50)
        gf.shapeColor = "blue";
        gf.x = Math.round(random(100,701));
        gf.velocityY = 6;
        var rand = Math.round(random(1,6))
        switch(rand){

            case 1: gf.addImage(hotdog)
            break;

            case 2: gf.addImage(pasta)
            break;

            case 3: gf.addImage(sandwich)
            break;

            case 4: gf.addImage(taco)
            break;

            case 5: gf.addImage(turkey)
            break;

            case 6: gf.addImage(pie)
            break;
        }
        gf.scale = 0.4
        gf.lifetime = 120
        gf.depth = chef.depth;
        chef.depth +=1
        goodFoods.add(gf);
    }
    
}   

function pize(){
 if(frameCount %750 ===0){
     prize = createSprite(Math.round(random(99,701)),50)
     prize.addImage(prizeImg)
     prize.scale = 0.25
     prize.velocityY = 15;
     prize.lifetime = 120;
     prize.depth = chef.depth;
        chef.depth +=1
        prizes.add(prize);
    }
}

function specialCake(){
    if(frameCount %500 === 0){
        cakeS = createSprite(Math.round(random(99,701)),50)
        cakeS.addImage(cake)
        cakeS.scale = 0.27
        cakeS.velocityY = 10;
        cakeS.lifetime = 120;
        cakeS.depth = chef.depth;
        chef.depth +=1
        cakesGroup.add(cakeS)
     
    }

}

function specialWaffle(){
    if(frameCount %350 === 0){
        waffle = createSprite(Math.round(random(99,701)),50)
        waffle.addImage(extraLifeImg)
        waffle.scale = 0.27
        waffle.velocityY = 10;
        waffle.lifetime = 120;
        waffle.depth = chef.depth;
        chef.depth +=1
        waffles.add(waffle)
     
    }

}

function specialMushroom(){
    if(frameCount %300 === 0){
        mushroom= createSprite(Math.round(random(99,701)),50)
        mushroom.addImage(poisionImg)
        mushroom.scale = 0.27
        mushroom.velocityY = 10;
        mushroom.lifetime = 120;
        mushroom.depth = chef.depth;
       mushroom.depth +=1
        mushrooms.add(mushroom)
     
    }

}

function specialProtien(){
    if(frameCount %400 === 0){
       speedThing = createSprite(Math.round(random(99,701)),50)
        speedThing.addImage(protien)
        speedThing.scale = 0.27
        speedThing.velocityY = 10;
        speedThing.lifetime = 120;
        speedThing.depth = chef.depth;
        chef.depth +=1
        protienGroup.add(speedThing)
     
    }

}


function specialRawFood(){
    if(frameCount %10 === 0){
       raw = createSprite(Math.round(random(99,701)),50)
        raw.addImage(rawFood)
        raw.scale = 0.27
        raw.velocityY = 10;
        raw.lifetime = 120;
        raw.depth = chef.depth;
       chef.depth +=1
        rawFoods.add(raw)
     
    }

}
