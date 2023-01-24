let dive;
let beat;
let logo;
let menu;
let PLAY;
let option;
let START = 0;
let blur;
let back;
let border;
let yeah;
score = 0;
miss = 0;
const P = 80;
const X = 88;
const CE = 67;
fr = 2
let A;
let B;
let C;
let D;
let S;
let nic;
meh = false
let START2;
let back2;
hit = true
let music = {
  freedom: new Howl({
    src: [
      "Freedom.mp3"
    ],
    autoplay: true
  })
}

function playMusic() {
  if (!music.freedom.playing()) {
    music.freedom.play();
  }
}

function stopMusic() {
  if (!music.freedom.stop()) {
    music.freedom.stop();
  }

}


function preload() {
  mainMenu();
  inGame();
  back = loadImage("back.png")
  back2 = loadImage("back2.png")
  rank();
  nic = loadFont("Nic.ttf")
  gamePaused();
}

function inGame() { // Images for the actual game
  dive = loadImage("map.jpg")
  beat = loadImage("Beat.png")
  border = loadImage("border.png")
}

function gamePaused() {
  yeah = loadImage("pause.png")
}
function mainMenu() { // images for the menu
  logo = loadImage("Menu.png")
  menu = loadImage("Background.jpeg")
  PLAY = loadImage("play.png")
  option = loadImage("settings.png")
  blur = loadImage("Blur.png")
}

function rank() { // ranks
  A = loadImage("A rank.png")
  B = loadImage("B rank.png")
  C = loadImage("C rank.png")
  D = loadImage("D rank.png")
  S = loadImage("S rank.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr)
  // music.freedom.play();
  width = windowWidth
  height = windowHeight
}

function draw() {
  if (START == 0) {
    stopMusic()
  }
  imageMode(CENTER) // the menu
  image(menu, width / 2, height / 2);
  image(PLAY, width / 1.47, height / 2.5);
  image(option, width / 1.45, height / 2);
  image(logo, width / 2, height / 2);
  game();
  options();
  fill(255)
  textSize(35)
  textAlign(RIGHT, BOTTOM)
  text("Harman", width, height)
  print(mouseX)
}

function game() {
  // map images
  if (START == 1) {
    fr += 0.001
    playMusic()
    imageMode(CENTER)
    // background images
    image(dive, width / 2, height / 2)
    image(border, width / 2, height / 2)
    // score
    fill(255)
    textSize(42)
    textAlign(LEFT, BOTTOM)
    text("Score:", width / 300, height)
    text(score, width / 10, height)
    text("Misses:", width / 300, height / 10)
    text(miss, width / 9, height / 10)
    beats();
    ranking();
    // pausing the game
    if (keyIsDown(P)) {
      meh = true
      pauseSystem();
    }
  }
}


function pauseSystem() {
  if (meh = true) {
    START2 = 0
  }

  if (START2 == 0) {
    image(yeah, width / 2, height / 2)
    score = 0
    miss = 0
    image(back2, width / 3.5, height / 1.6)
    stopMusic()
  }


}

function ranking() { // different ranks
  if (score < 50) {
    image(D, width / 1.09, height / 10)
  }
  if (score > 50 && score < 100) {
    image(C, width / 1.09, height / 10)
  }
  if (score > 100 && score < 200) {
    image(B, width / 1.09, height / 10)
  }
  if (score > 200 && score < 300) {
    image(A, width / 1.09, height / 10)
  }
  if (score > 300 && score < 500) {
    image(S, width / 1.09, height / 10)
  }
}

function doubleClicked() {//increases framerate
  fr += 1
  frameRate(fr)
}


function beats() {

  // the circle
  first = random(230, 1130)
  second = random(2, 600)
  image(beat, first, second);

}




function keyPressed() {// the hitbox for the circle
  if (hit) {
    if (keyIsDown(X)) {
      if (first - 60 < mouseX && mouseX < first + 60 && second - 60 < mouseY && mouseY < second + 60) {
        score += 1
      }
    }

    if (keyIsDown(CE)) {
      if (first - 60 < mouseX && mouseX < first + 60 && second - 60 < mouseY && mouseY < second + 60) {
        score += 1
      }
    }
  }

  if (hit = !hit) {
    miss += 1
  }

}


function options() {// instructions
  if (START == 2) {
    imageMode(CENTER)
    image(blur, width / 2, height / 2);
    image(back, 100, 534)
    stopMusic()
    textAlign(CENTER)
    text("Insturctions", width / 2, height / 10)
    text("use your mouse and press X or C on the circle to increase your score", width / 2, height / 5)
    text("Hold P if you want to Restart or navigate to the menu", width / 2, height / 3)
    text("double click to increase the difficulty", width / 2, height / 1.9)
    text("get different ranks depending on your score", width / 2, height / 1.5)

    fill(255, 69, 0)
    textSize(50)
    textFont(nic)
    text("Enjoy Freedom Dive", width / 2, height / 1.2)
  }
}

function mouseClicked() {// hitbox for the menu
  if (START == 0) {
    if (mouseX < 1080 && mouseX > 850) {
      if (mouseY < 275 && mouseY > 215) {
        START = 1
      }
      if (mouseY < 335 && mouseY > 290) {
        START = 2
      }
    }
  }
  if (START == 2) {
    if (mouseX < 135 && mouseX > 1) {
      if (mouseY < 600 && mouseY > 470) {
        START = 0
      }
    }
  }
  if (START2 == 0) {
    if (mouseX > 350 && mouseX < 415) {
      if (mouseY > 300 && mouseY < 485) {
        START = 0
      }
    }
  }
}
