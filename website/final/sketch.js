
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

var image1_up, image2_over;
var snd1, snd2, snd3, snd4, snd5, snd6;
var snda, sndb, sndc, sndd, snde, sndf, sndg, sndh, sndi, sndj, sndk, sndl, sndm, sndn, sndo, sndp, sndq, sndr, snds, sndt, sndu, sndv, sndw, sndx, sndy, sndz;
var Clickable;
// var inputElem;
// var duration;
// var  slideWidth = 500;
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function preload() {

     snd1 = loadSound("sound/blop.mp3");
     snd2 = loadSound("sound/mainmenu.mp3");
     snd3 = loadSound("sound/virus.mp3");
     snd4 = loadSound("sound/sick.mp3");
     snd5 = loadSound("sound/gameover.mp3");
     snd6 = loadSound("sound/help.mp3");
     snd7 = loadSound("sound/gamesuccess.mp3");
     snda = loadSound("sound/intensecough1.mp3");
     sndb = loadSound("sound/smallcough1.mp3");
     sndc = loadSound("sound/smallcough3.mp3");
     sndd = loadSound("sound/mediumcough1.mp3");
     snde = loadSound("sound/intensecough3.mp3");
     sndf = loadSound("sound/smallcough2.mp3");
     sndg = loadSound("sound/mediumcough2.mp3");
     sndh = loadSound("sound/intensecough2.mp3");
     sndi = loadSound("sound/smallcough1.mp3");
     sndj = loadSound("sound/mediumcough3.mp3");
     sndk = loadSound("sound/mediumcough2.mp3");
     sndl = loadSound("sound/smallcough2.mp3");
     sndm = loadSound("sound/intensecough1.mp3");
     sndn = loadSound("sound/smallcough2.mp3");
     sndo = loadSound("sound/intensecough3.mp3");
     sndp = loadSound("sound/mediumcough3.mp3");
     sndq = loadSound("sound/mediumcough1.mp3");
     sndr = loadSound("sound/smallcough2.mp3");
     snds = loadSound("sound/intensecough2.mp3");
     sndt = loadSound("sound/intensecough3.mp3");
     sndu = loadSound("sound/smallcough2.mp3");
     sndv = loadSound("sound/mediumcough3.mp3");
     sndw = loadSound("sound/mediumcough1.mp3");
     sndx = loadSound("sound/smallcough2.mp3");
     sndy = loadSound("sound/intensecough1.mp3");
     sndz = loadSound("sound/smallcough2.mp3");


}


// define your p5.play sprites as global objects first.
var ghosty;
var character;
var apple;
var rip;
var flower;
var win;

// global manager object
var mgr;

function setup() {
    createCanvas(900, 800);
  //  console.log(hell);
   // inputElem = createInput('');
//ready to run, every scene you want to make...
     mgr = new SceneManager();
     masterVolume(.13); //to change the music's volume
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.

    ghosty = createSprite(0, 0); //realte to p5 documentation (create sprite objects, animate sequences and still images)
    //ghosty.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");
    ghosty.addAnimation("walk", "assets/character_walk001.png",  "assets/character_walk003.png");
    ghosty.addAnimation("smile", "assets/character_smile001.png",  "assets/character_smile003.png");

    character = createSprite (0, 0);

    character.addAnimation("sick", "assets/character_sick001.png",  "assets/character_sick003.png");
    character.addAnimation("smallcough", "assets/character_smallcough001.png",  "assets/character_smallcough003.png");
    character.addAnimation("mediumcough", "assets/character_mediumcough001.png",  "assets/character_mediumcough003.png");
    character.addAnimation("highcough", "assets/character_highcough001.png",  "assets/character_highcough003.png");
    character.addAnimation("intensecough", "assets/character_intensecough001.png",  "assets/character_intensecough003.png");

    apple = createSprite (0,0);
    apple.addAnimation("display", "assets/apple_display001.png",  "assets/apple_display003.png");

    rip = createSprite (0,0);
    rip.addAnimation("rip", "assets/rip_display001.png",  "assets/rip_display003.png");

    flower = createSprite (0,0);
    flower.addAnimation("flower", "assets/flower_display001.png",  "assets/flower_display003.png");

    stars = createSprite (0,0);
    stars.addAnimation("stars", "assets/stars_display001.png",  "assets/stars_display003.png");

    win = createSprite (0,0);
    win.addAnimation("win", "assets/win_character001.png",  "assets/win_character003.png");


    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (mainmenuscene); //names of functions
    mgr.addScene (maininterface);
    mgr.addScene (helpinterface);
    mgr.addScene (gameoverscene);
    mgr.addScene (gamesuccess);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager

  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
//   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( mainmenuscene );
            break;
        case '2':
            mgr.showScene( maininterface );
            break;
        case '3':
            mgr.showScene( gameoverscene );
            break;
        case '4':
            mgr.showScene( gamesuccess );
            break;
        case '0':
            mgr.showScene( helpinterface );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
