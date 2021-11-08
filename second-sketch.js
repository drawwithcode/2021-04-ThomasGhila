const urlString = window.location.href;
let url = new URL(urlString);

const phrase = "Clicking the mouse won't keep you here!";
const words = phrase.split(" ");
let allButtons;
let singleButton;
let iterator = 0;

let help

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  background("hsl(160, 100%, 50%)");

  words.forEach((word) => {
    createElement("button", word);
  });

  allButtons = selectAll("button");

  help = createElement("help", "?");
  help.style(
    "position:absolute; border: 0px;background-color:transparent;color:#fff;text-decoration:none;padding:16px 31px;text-shadow:0px 1px 10px #000;font-size:45px;"
  );
  help.position(windowWidth-150, 40);
}

function draw() {
 
  // textAlign(CENTER);
  // textSize(20);
  // text(frameCount, width / 2, height / 2);

  help.mouseOver(callHelp);

  iterator++;
  allButtons.forEach((singleButton, i) => {
    textSize(20)
    let x = noise((iterator + 40 * i) / 400) * windowWidth;
    let y = noise((iterator - 40 * i) / 400) * windowHeight;

    singleButton.style(
      "position:absolute; border: 0px;background-color:transparent;color:#fff;text-decoration:none;padding:16px 31px;text-shadow:0px 1px 10px #000;font-size:25px;"
    );
    singleButton.position(x, y);
    
    
  });
}

function mouseClicked() {
  //window.open("https://www.thomasghilardotti.com/", "_self");

  window.open("http://127.0.0.1:5500/", "_self");
}

function callHelp() {
  rectMode(CENTER);
  noStroke();
  fill("WHITE");
  rect(windowWidth/2,windowHeight/2, 600, 150, 20)
  fill("hsl(160, 100%, 50%)")
  textAlign(CENTER);
  text("ADVICE: Try clicking your mouse ;)", windowWidth/2, windowHeight/2);
}