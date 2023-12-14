// //adapted from this excellent sketch by jaden.mansfield! https://editor.p5js.org/jaden.mansfield/sketches/CUBPZKyP1

// let bot = new RiveScript(); //new bot
// let submitBttn, inputField;

// function preload() {
//   bot.loadFile("clem.txt").then(loaded).catch(error);
// }
// function setup() {
//   noCanvas();
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;

//   inputField = createInput("");
//   inputField.position(x, y);
//   submitBttn = createButton("submit");
//   submitBttn.position(x+200, y);
//   submitBttn.mousePressed(botResponse);

// }

// function botResponse(){
//   let input = inputField.value();
//   bot.reply("local-user", input).then(respond);
// }

// //response - change this somehow to not stack? or display differently
// function respond(reply) {
//   // createP(reply);
//   let clemResponse = createElement('p', reply);
// }

// function loaded() {
//   console.log("bot ready!");
//   bot.sortReplies();
// }

// function error(error) {
//   console.log("There is an error.");
//   console.log(error);
// }


let bot;
let text_input, text_output;

async function loadBot() {
  await bot.loadFile("clem.txt");
  bot.sortReplies();
}

async function chat() {
  let txt = text_input.value();
  let reply = await bot.reply("local-user", txt);
  text_output.html(reply);
}

function setup() {
  noCanvas();
  bot = new RiveScript();
  let button = select("#submit");
  text_input = select("#user_input");
  text_output = select("#output");
  loadBot();
  button.mousePressed(chat);
}