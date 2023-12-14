//adapted from this excellent sketch by jaden.mansfield! https://editor.p5js.org/jaden.mansfield/sketches/CUBPZKyP1

let bot = new RiveScript(); //new bot
let submitBttn, inputField;

function preload() {
  bot.loadFile("pbo.txt").then(loaded).catch(error);
}
function setup() {
  noCanvas();
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  inputField = createInput("");
  inputField.position(x, y);
  submitBttn = createButton("submit");
  submitBttn.position(x+200, y);
  submitBttn.mousePressed(botResponse);

}

function botResponse(){
  let input = inputField.value();
  bot.reply("local-user", input).then(respond);
}

//response - change this somehow to not stack? or display differently
function respond(reply) {
  // createP(reply);
  let pboResponse = createElement('p', reply);
  // pboResponse.parent('output');
  pboResponse.position (x, y-25);
}

function loaded() {
  console.log("bot ready!");
  bot.sortReplies();
}

function error(error) {
  console.log("There is an error.");
  console.log(error);
}