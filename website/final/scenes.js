
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// example of global var that can be used between scenes

////////////////////////////// 1 (MAIN MENU) /////////////////////////////////
function mainmenuscene()  {

    let loy= 0;
    var lox= 0;
    var ghost;

    this.setup = function() {
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      textAlign(CENTER);
      textSize(.3);

      ghosty.addAnimation("walk", "assets/character_walk001.png",  "assets/character_walk003.png");
      ghosty.addAnimation("smile", "assets/character_smile001.png",  "assets/character_smile003.png");

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    // this will trigger everytime
    this.enter = function()  {

        ghosty.visible = true;
        character.visible = false;
        apple.visible = false;
        flower.visible = false;
        rip.visible = false;
        stars.visible = false;
        win.visible = false;


        ghosty.onMouseOver = function() {

          this.changeAnimation("smile");

        }

        ghosty.onMouseOut = function() {

          this.changeAnimation("walk");

        }

        click1 = new Clickable();
        click1.locate(width/2 - 115, height/2 -120);
        click1.color = "#68acaf";
        click1.cornerRadius = 10;
        click1.stroke = "FFFFFF"
        click1.strokeWeight = 5;
        click1.width = 250;
        click1.height = 80;
        click1.textColor = "fefbf6";
        click1.textSize = 50;
        click1.text = "START";
        click1.textFont = "Courier New"
        click1.onPress = function()
        {
          click1.stroke = "#eaa8a4"
          mgr.showScene(maininterface);

          if ( !snd1.isPlaying() ) { //if has play, then play the sound
             snd1.play();
             snd3.stop();
           }


        }

         click1.onHover = function() {
         click1.stroke = "#eaa8a4"
        }

        click1.onOutside = function() {
        click1.stroke = "#FFFFFF"
       }

       click2 = new Clickable();
       click2.locate(width/2 - 115, height/2 + 5);
       click2.color = "#eaa8a4";
       click2.cornerRadius = 10;
       click2.stroke = "FFFFFF"
       click2.strokeWeight = 5;
       click2.width = 250;
       click2.height = 80;
       click2.textColor = "fefbf6";
       click2.textSize = 50;
       click2.text = "HELP!";
       click2.textFont = "Courier New"
       click2.onPress = function()
       {
         click2.color = "#68acaf"
         mgr.showScene(helpinterface);
         snd1.play();

       }

        click2.onHover = function() {
        click2.stroke = "#68acaf"

       }

       click2.onOutside = function() {
       click2.stroke = "#FFFFFF"


    }


    }


    this.draw = function()

    {
        background(191,250, 239);
        textAlign(CENTER);

        if ( !snd2.isPlaying() ) { //if has play, then play the sound
           snd2.play();
           snd4.stop();
           snd5.stop();
           snd6.stop();
           snd7.stop();
         }

        //STAR
        click1.draw();
        //HELP
        click2.draw();

        //spreading the virus
        fill(255);
        strokeWeight(2);
        rect(20 ,20, 440, 40, 50);
        noStroke();
        fill(74, 123, 135);
        textSize(20);
        textFont("Helvetica");
        text("click to see what happens when you go outside", 240, 40);

        //grass
        noStroke();
        fill(223, 250, 166)
        rect(0,600,1000,900);

        //pathway
        fill(232, 177, 149)
        rect(0,650,900,80);

        push();
        //
        translate(lox*1,630);
        noStroke();
        fill(255, 235, 148);
        scale(1.2);

        drawSprites();
        //ellipse(0,100, 250, 250);
        if (lox > width) {
          lox = 0;
        } else {
          lox++;
        }
        //
        pop();


        push();
        //
        translate(lox*1,height/2);
        fill(255);
        //speech bubble
        textSize(28);
        rect(-122,103,250,40, 8);
        fill(74, 123, 135);
        textSize(20);
        text("It's so nice to be out!", 0, 123);
        //text("click to continue", 0, 230);
        if (lox > width) {
          lox = 0;
        } else {
          lox++;
        }
        //
        pop();

        push();
        //

        //sun
        translate(-lox/7,0);
        fill(255, 235, 148);
        ellipse(750,100,180,180)


        translate(-lox/3,150);
        fill(255, 250, 239);
        noStroke();

        //cloud1
        scale(1.3);
        rect(490,0,30,10); //(x, y, w, h)
        rect(490,0,30,30);
        rect(490,20,60,20);
        rect(450,30,110,10);

        //cloud1
        scale(1.3);
        rect(200,0,30,10); //(x, y, w, h)
        rect(200,0,30,30);
        rect(220,10,30,10);
        rect(180,30,90,10);

        //cloud3
        translate(-lox/5,150);
        rect(500,-60,40,10);
        rect(510,-65,40,10);

        //cloud3
        translate(-lox/3,150);
        rect(600,-140,50,10);
        rect(600,-140,20,-10);



        if (lox > width) { //to make the clouds go across the screen
          lox = 0;
        }
         lox  --;
        //
         pop();

}

    this.mousePressed = function()
    {
        snd3.play();
        var s = createSprite(mouseX, mouseY, 10, 10);

        s.velocity.x = random(-5, 5);
        s.velocity.y = random(-5, 5);

       }



}

////////////////////////////// 2 (MAIN INTERFACE) /////////////////////////////////
function maininterface()  {


this.setup = function()  {

  character.addAnimation("sick", "assets/character_sick001.png",  "assets/character_sick003.png");
  apple.addAnimation("display", "assets/apple_display001.png",  "assets/apple_display003.png");
  flower.addAnimation("rip", "assets/flower_display001.png",  "assets/flower_display003.png");

    }

    this.enter = function()  {
        let loy= 0;
        character.visible = true;
        ghosty.visible = true;
        flower.visible = true;
        apple.visible = true;
        draggedSprite = true;
        rip.visible = false;
        stars.visible = false;
        win.visible = false;

        apple.scale = .4
        apple.position.x = 155
        apple.position.y = -120

        flower.scale = .8
        flower.position.x = 240
        flower.position.y = -145

    apple.onMousePressed = function() {
    apple.changeAnimation('display');
    this.animation.goToFrame(this.animation.getLastFrame());
    if (draggedSprite == null) {
      draggedSprite = apple;
    }
  };

  apple.onMouseReleased = function() {
    this.changeAnimation('sick');
    this.animation.goToFrame(0);
    if (draggedSprite == apple) {
      draggedSprite = null;
    }
  };

  if (draggedSprite = null) {
  draggedSprite.position.x = mouseX;
  draggedSprite.position.y = mouseY;
  }


  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;

    }


    this.draw = function() {

      background(154, 205, 221);
      textAlign(CENTER);
      textSize(5);

      if ( !snd4.isPlaying() ) { //if has play, then play the sound
         snd4.play();
         snd2.stop();
         snd3.stop();
         snd5.stop();
         snd6.stop();
         snd7.stop();
       }

      // floor
      noStroke();
      fill(254, 238, 230);
      rect(0, 500, 900, 500);

      //window
      noStroke();
      fill(206, 250, 239);
      rect(80, 200, 180, 180);

      //horizantalwindow
      noStroke();
      fill(154, 205, 221);
      rect(165, 200, 10, 180);

      //verticalwindow
      noStroke();
      fill(154, 205, 221);
      rect(80, 285, 180, 10);

      //tablebody
      noStroke();
      fill(232, 177, 149);
      rect(580, 380, 280, 30, 10);

      //lefttablelegs

      //righttable legs
     translate(350, 550);
     scale(1.8);


     // Draw the clock background
       push();
       translate(-10, -290);
       noStroke();
       scale(.1);
       fill(239, 111, 162);
       ellipse(cx, cy, clockDiameter + 50, clockDiameter + 50);
       fill(252, 140, 182);
       ellipse(cx, cy, clockDiameter, clockDiameter);

       // Angles for sin() and cos() start at 3 o'clock;
       // subtract HALF_PI to make them start at the top
       let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
       let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
       let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

       // Draw the hands of the clock
       stroke(255);
       strokeWeight(6);
       line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
       strokeWeight(2);
       line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
       strokeWeight(4);
       line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

       // Draw the minute ticks
       strokeWeight(2);
       beginShape(POINTS);
       for (let a = 0; a < 360; a += 6) {
         let angle = radians(a);
         let x = cx + cos(angle) * secondsRadius;
         let y = cy + sin(angle) * secondsRadius;
         vertex(x, y);
       }
       endShape();
       pop();

drawSprites();


    }

this.keyPressed = function() {

  if (key === 'a') {
  character.changeAnimation("intensecough");
  if ( !snda.isPlaying() ) { //if has play, then play the sound
     snda.play();
 }
}
else if (key === 'b') {
  character.changeAnimation("mediumcough");
  if ( !sndb.isPlaying() ) { //if has play, then play the sound
     sndb.play();
 }
}
else if (key === 'c') {
  character.changeAnimation("smallcough");
  if ( !sndc.isPlaying() ) { //if has play, then play the sound
     sndc.play();
 }
}
else if (key === 'd') {
  character.changeAnimation("smallcough");
  if ( !sndd.isPlaying() ) { //if has play, then play the sound
     sndd.play();
 }
}
else if (key === 'e') {
  character.changeAnimation("intensecough");
  if ( !snde.isPlaying() ) { //if has play, then play the sound
     snde.play();
 }
}
else if (key === 'f') {
  character.changeAnimation("mediumcough");
  if ( !sndf.isPlaying() ) { //if has play, then play the sound
     sndf.play();
 }
}
else if (key === 'g') {
  character.changeAnimation("mediumcough");
  if ( !sndg.isPlaying() ) { //if has play, then play the sound
     sndg.play();
 }
}
else if (key === 'h') {
  character.changeAnimation("intensecough");
  if ( !sndh.isPlaying() ) { //if has play, then play the sound
     sndh.play();
 }
}
else if (key === 'i') {
  character.changeAnimation("mediumcough");
  if ( !sndi.isPlaying() ) { //if has play, then play the sound
     sndi.play();
 }
}
else if (key === 'j') {
  character.changeAnimation("smallcough");
  if ( !sndj.isPlaying() ) { //if has play, then play the sound
     sndj.play();
 }
}
else if (key === 'k') {
  character.changeAnimation("highcough");
  if ( !sndk.isPlaying() ) { //if has play, then play the sound
     sndk.play();
 }
}
else if (key === 'l') {
  character.changeAnimation("mediumcough");
  if ( !sndl.isPlaying() ) { //if has play, then play the sound
     sndl.play();
 }
}
else if (key === 'm') {
  character.changeAnimation("intensecough");
  if ( !sndm.isPlaying() ) { //if has play, then play the sound
     sndm.play();
 }
}
else if (key === 'n') {
  character.changeAnimation("highcough");
  if ( !sndn.isPlaying() ) { //if has play, then play the sound
     sndn.play();
 }
}
else if (key === 'o') {
  character.changeAnimation("intensecough");
  if ( !sndo.isPlaying() ) { //if has play, then play the sound
     sndo.play();
 }
}
else if (key === 'p') {
  character.changeAnimation("highcough");
  if ( !sndp.isPlaying() ) { //if has play, then play the sound
     sndp.play();
 }
}
else if (key === 'q') {
  character.changeAnimation("smallcough");
  if ( !sndq.isPlaying() ) { //if has play, then play the sound
     sndq.play();
 }
}
else if (key === 'r') {
  character.changeAnimation("mediumcough");
  if ( !sndr.isPlaying() ) { //if has play, then play the sound
     sndr.play();
 }
}
else if (key === 's') {
  character.changeAnimation("intensecough");
  if ( !snds.isPlaying() ) { //if has play, then play the sound
     snds.play();
 }
}
else if (key === 't') {
  character.changeAnimation("intensecough");
  if ( !sndt.isPlaying() ) { //if has play, then play the sound
     sndt.play();
 }
}
else if (key === 'u') {
  character.changeAnimation("mediumcough");
  if ( !sndu.isPlaying() ) { //if has play, then play the sound
     sndu.play();
 }
}
else if (key === 'v') {
  character.changeAnimation("mediumcough");
  if ( !sndv.isPlaying() ) { //if has play, then play the sound
     sndv.play();
 }
}
else if (key === 'w') {
  character.changeAnimation("highcough");
  if ( !sndw.isPlaying() ) { //if has play, then play the sound
     sndw.play();
 }
}
else if (key === 'x') {
  character.changeAnimation("smallcough");
  if ( !sndx.isPlaying() ) { //if has play, then play the sound
     sndx.play();
 }
}
else if (key === 'y') {
  character.changeAnimation("intensecough");
  if ( !sndy.isPlaying() ) { //if has play, then play the sound
     sndy.play();
 }
}
else if (key === 'z') {
  character.changeAnimation("mediumcough");
  if ( !sndz.isPlaying() ) { //if has play, then play the sound
     sndz.play();
 }
}
else {
character.changeAnimation("sick");
}

}
}


////////////////////////////// 3 (GAMEOVER) /////////////////////////////////

function gameoverscene()  {

  var textX;
  var textY;

  this.setup = function() {

    rip.addAnimation("display", "assets/rip_display001.png",  "assets/rip_display003.png");

  }

  this.enter = function()  {

    character.visible = false;
    ghosty.visible = false;
    apple.visible = false;
    flower.visible = false;
    rip.visible = true;
    stars.visible = false;
    win.visible = false;

    rip.scale = 2
    rip.position.x = width/2-10
    rip.position.y = height/2+200

    if ( !snd5.isPlaying() ) { //if has play, then play the sound
       snd5.play();
       snd2.stop();
       snd3.stop();
       snd4.stop();
       snd6.stop();
       snd7.stop();
     }

     text(CENTER);
     click4 = new Clickable();
     click4.locate(width/2 - 430, height/2 + 300);
     click4.color = "#eaa8a4";
     click4.cornerRadius = 10;
     click4.stroke = "FFFFFF"
     click4.strokeWeight = 5;
     click4.width = 120;
     click4.height = 80;
     click4.textColor = "fefbf6";
     click4.textSize = 25;
     click4.text = "MAIN MENU";
     click4.textFont = "Courier New"
     click4.onPress = function()
     {
       click4.stroke = "#eaa8a4"
       mgr.showScene(mainmenuscene);
       snd1.play();

     }

      click4.onHover = function() {
      click4.stroke = "#68acaf"
     }

      click4.onOutside = function() {
      click4.stroke = "#FFFFFF"
     }

   }



	this.draw = function()
	{

    background(173, 214, 209);

    drawSprites();

    fill("white");
    textAlign(CENTER);
    textSize(30);
    textFont('Helvetica');
    text("Your pet has died from Corona Virus...", width/2, height/2);


  fill("white");
  textFont('Courier New');
  //textAlign(CENTER);
  textSize(80);
  text("YOUR PET DIED", width/2, height/2-200);

    click4.draw();

	}
}

  this.keyPressed = function() {

    if (key === 'o') {
      if ( !snd3.isPlaying() ) { //if has play, then play the sound
         snd3.play();
     }
}

}

////////////////////////////// 4 /////////////////

function gamesuccess() {

  var textX;
  var textY;

  this.setup = function()  {

stars.addAnimation("stars", "assets/stars_display001.png",  "assets/stars_display003.png");
win.addAnimation("win", "assets/win_character001.png",  "assets/win_character003.png");

  }

  this.enter = function()
  {

    character.visible = false;
    ghosty.visible = false;
    apple.visible = false;
    flower.visible = false;
    rip.visible = false;
    stars.visible = true;
    win.visible = true;

    win.scale = 2
    win.position.x = width/2-10
    win.position.y = height/2+240

    stars.scale = 1.5
    stars.position.x = width/2-40
    stars.position.y = height/2-300


    text(CENTER);
    click5 = new Clickable();
    click5.locate(width/2 - 430, height/2 + 300);
    click5.color = "#eaa8a4";
    click5.cornerRadius = 10;
    click5.stroke = "FFFFFF"
    click5.strokeWeight = 5;
    click5.width = 120;
    click5.height = 80;
    click5.textColor = "fefbf6";
    click5.textSize = 25;
    click5.text = "MAIN MENU";
    click5.textFont = "Courier New"
    click5.onPress = function()
    {
      click5.stroke = "#eaa8a4"
      mgr.showScene(mainmenuscene);
      snd1.play();

    }

     click5.onHover = function() {
     click5.stroke = "#68acaf"
    }

     click5.onOutside = function() {
     click5.stroke = "#FFFFFF"
    }


  }



  this.draw = function() {

      background(187, 200, 248);

      if ( !snd7.isPlaying() ) { //if has play, then play the sound
         snd7.play();
         snd2.stop();
         snd3.stop();
         snd4.stop();
         snd5.stop();
         snd6.stop();
       }

       fill("white");
       textAlign(CENTER);
       textSize(25);
       textFont('Helvetica');
       text("Stay at least 6 feet (about 2 arms’ length) from other people,\n" +
         "Do not gather in groups,\n" +
         "Stay out of crowded places and avoid mass gatherings,\n" +
         "Always wash and sanitize your hands\n" +
         "Stay home and keep yourself busy\n" +
         "& most importantly TAKE CARE OF YOUR MENTAL HEALTH!\n" +
          "We are all going to get through this!\n" +
          "DON'T LOSE HOPE!", width/2, height/2-120);




     fill("white");
     textFont('Courier New');
     //textAlign(CENTER);
     textSize(50);
     text("Congrats! Your pet SURVIVED.", width/2, height/2-200);

      drawSprites();
      click5.draw();

  }

}

////////////////////////////// HELP /////////////////

function helpinterface() {
  var textX;
  var textY;

  var direction = 90;

  this.setup = function() {


  }

  this.enter = function() {
    apple.visible = false;
    ghosty.visible = false;
    flower.visible = false;
    character.visible = false;
    stars.visible = false;
    win.visible = false;

    text(CENTER);
    click3 = new Clickable();
    click3.locate(width/2 - 430, height/2 + 300);
    click3.color = "#eaa8a4";
    click3.cornerRadius = 10;
    click3.stroke = "FFFFFF"
    click3.strokeWeight = 5;
    click3.width = 120;
    click3.height = 80;
    click3.textColor = "fefbf6";
    click3.textSize = 25;
    click3.text = "BACK";
    click3.textFont = "Courier New"
    click3.onPress = function()
    {
      click3.stroke = "#eaa8a4"
      mgr.showScene(mainmenuscene);

    }

     click3.onHover = function() {
     click3.stroke = "#68acaf"
    }

    click3.onOutside = function() {
    click3.stroke = "#FFFFFF"
    }

  }

  this.draw = function()
{

  textX = 10;
  textY = 0;

  background(241, 201, 188);

  if ( !snd6.isPlaying() ) { //if has play, then play the sound
     snd6.play();
     snd2.stop();
     snd3.stop();
     snd4.stop();
     snd5.stop();
   }

  var r = sin( frameCount * .08 );

  fill(249, 224, 218);
  noStroke();
  ellipse( 300, 300, map(r, 0, 1, 500, 400) );

  fill(248, 233, 229);
  noStroke();
  ellipse( 300, 300, map(r, 0, 1, 200, 300) );

  fill(252, 244, 238);
  noStroke();
  ellipse( width / 2, height / 2, map(r, 0, 1, 100, 200) );

  fill("black");
  textAlign(CENTER);
  textSize(20);
  textFont('Helvetica');
  text("Press any key letters to trigger the cough\n" +
    "There are several distinctive coughs when the letters are pressed\n" +
    "*Make sure to write down the letter that has the intense cough*\n" +
    "After you have written down all the letters that had the intense cough, solve the two word phrase\n" +
    "If the phrase is incorrect, your pet will die." , width/2, height/2);


fill("white");
textFont('Courier New');
//textAlign(CENTER);
textSize(80);
text("HELP", width/2, height/2-200);

//BACK
click3.draw();


}


}
