const urlString = window.location.href;
let url = new URL(urlString);

console.log(url);

const phrase = "Going fast won't keep you here!";
const words = phrase.split(" ");
let allButtons;
let singleButton;
let iterator = 0;

let help

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("powderblue");

  words.forEach((word) => {
    createElement("button", word);
  });

  help = createElement("help", "?");
  help.style(
    "position:absolute; border: 0px;background-color:transparent;color:#fff;text-decoration:none;padding:16px 31px;text-shadow:0px 1px 10px #000;font-size:45px;"
  );
  help.position(windowWidth-150, 40);

  allButtons = selectAll("button");
}

function draw() {
  

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

  let distance = dist(mouseX, mouseY, pmouseX, pmouseY);
  let mappedDistance = map(distance, 0, width, 1, 50);

  stroke("WHITE")
  strokeWeight(mappedDistance);
  line(pmouseX, pmouseY, mouseX, mouseY);

  if(mappedDistance > 15) {
    window.open("second-page.html", "_self");
  }
}

function callHelp() {
  rectMode(CENTER);
  noStroke();
  fill("WHITE");
  rect(windowWidth/2,windowHeight/2, 600, 150, 20)
  fill("powderblue")
  textAlign(CENTER);
  text("ADVICE: Try getting your line thicker ;)", windowWidth/2, windowHeight/2);
}