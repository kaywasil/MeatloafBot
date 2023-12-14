function setup() {
  noLoop();
  colorMode(RGB, 255);

  let prompt = createInput('Type your prompt here');
  prompt.style('width', '400px');

  let col1 = color(235, 52, 119);

  let button1 = createButton('Chat With Meatloaf').mousePressed(generateText);
// button1.style('font-size', '12px');
// button1.style('background-color', col1);
// button1.position(75,430);

  async function generateText() {
    const response = await fetch('/api/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt.value() }),
    });
    const data = await response.json();
    createP(data.output.join(''));
  }
}

